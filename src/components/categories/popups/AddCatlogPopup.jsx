import { useFormik } from "formik";
import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import * as yup from "yup";
import { valdiationMessages } from "../../../utlis/validationMessages";
import TextField from "../../common/input-fields/TextField";
import { createCategory, createCatlog } from "../services/services";
import LoadingButton from "../../common/input-fields/LoadingButton";
import { toast } from "react-toastify";

const AddCatlogPopup = (props) => {

  //#region props
  const {
     onClose,
     getCatlogs
  } = props;

  //#region initialData
  const initialData = {
    'catlogName': '',
    'catlogDescription': '',
    'categoryId': secureLocalStorage.getItem('categoryId')
  }

  //#region variables
  const [btnLoaidng,setBtnLoading] = useState(false);

  //#region change events
  const handleChange = (name,value) => {
    catlogDetails.setFieldValue(name,value)
  }

  //#region click events
  const onSaveClick = () => {
    setBtnLoading(true);
    createNewCatlog();
  }

  //#region api post calls
  const createNewCatlog = async() =>{
    const requestedBody = {
        "categoryId": catlogDetails.values.categoryId,
        "name": catlogDetails.values.catlogName,
        "description": catlogDetails.values.catlogDescription
    };
    const data = await createCatlog(requestedBody);
    if(data.responseCode === 200){
      getCatlogs();
      toast.success("Category Created Successfully", {
          position: "bottom-right"
      })
      onClose();
    }
    else{
      setBtnLoading(false);
      toast.error("unable to create category", {
        position: "bottom-right",
        theme: "colored",
      })
    }
  }

  //#region formik validations
  const validationSchema = yup.object({
    catlogName: yup
      .string()
      .required(valdiationMessages.REQUIRED),
    catlogDescription: yup
      .string()
      .required(valdiationMessages.REQUIRED),
  })

  const catlogDetails = useFormik({
    initialValues: initialData,
    validationSchema: validationSchema,
    onSubmit: (values) => {
        onSaveClick();
    },
  });

  //#region return
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">ADD CATLOG</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body margin-top-minus-20">
            <div>
                <TextField 
                    name="catlogName"
                    placeHolder="Catlog Name"
                    value={catlogDetails.values.catlogName}
                    onChange={(name,value) => handleChange(name,value)}
                    onBlur={catlogDetails.handleBlur}
                    error={catlogDetails.touched.catlogName && catlogDetails.errors.catlogName}
                    errorMessage={catlogDetails.touched.catlogName && catlogDetails.errors.catlogName}/>
            </div>
            <div>
                <TextField 
                    name="catlogDescription"
                    placeHolder="Catlog Description"
                    value={catlogDetails.values.catlogDescription}
                    onChange={(name,value) => handleChange(name,value)}
                    onBlur={catlogDetails.handleBlur}
                    error={catlogDetails.touched.catlogDescription && catlogDetails.errors.catlogDescription}
                    errorMessage={catlogDetails.touched.catlogDescription && catlogDetails.errors.catlogDescription}/>
            </div>
          </div>
          <div className="modal-footer margin-top-5">
            <LoadingButton 
               name='Close'
               disabled={btnLoaidng}
               onClick={onClose}
               btnColor='btn-secondary' />
            <LoadingButton
               name='Save'
               loading={btnLoaidng}
               onClick={catlogDetails.handleSubmit}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCatlogPopup;
