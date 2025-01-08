import { useFormik } from "formik";
import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import * as yup from "yup";
import { valdiationMessages } from "../../../utlis/validationMessages";
import TextField from "../../common/input-fields/TextField";
import { createCategory } from "../services/services";
import LoadingButton from "../../common/input-fields/LoadingButton";
import { toast } from "react-toastify";

const AddCategoryPopup = (props) => {

  //#region props
  const {
     isOpen,
     onClose,
     getCategoriesByUser
  } = props;

  //#region initialData
  const initialData = {
    'categoryName': '',
    'categoryDescription': '',
    'userId': secureLocalStorage.getItem('userId')
  }

  //#region variables
  const [btnLoaidng,setBtnLoading] = useState(false);

  //#region change events
  const handleChange = (name,value) => {
    categoryDetails.setFieldValue(name,value)
  }

  //#region click events
  const onSaveClick = () => {
    setBtnLoading(true);
    createNewCategory();
  }

  //#region api post calls
  const createNewCategory = async() =>{
    const requestedBody = {
        "name": categoryDetails.values.categoryName,
        "description": categoryDetails.values.categoryDescription,
        "userId": categoryDetails.values.userId
    };
    const data = await createCategory(requestedBody);
    if(data.responseCode === 200){
      getCategoriesByUser();
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
    categoryName: yup
      .string()
      .required(valdiationMessages.REQUIRED),
    categoryDescription: yup
      .string()
      .required(valdiationMessages.REQUIRED),
  })

  const categoryDetails = useFormik({
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
            <h5 className="modal-title">Mohan</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
                <TextField 
                    name="categoryName"
                    placeHolder="Category Name"
                    value={categoryDetails.values.categoryName}
                    onChange={(name,value) => handleChange(name,value)}
                    onBlur={categoryDetails.handleBlur}
                    error={categoryDetails.touched.categoryName && categoryDetails.errors.categoryName}
                    errorMessage={categoryDetails.touched.categoryName && categoryDetails.errors.categoryName}/>
            </div>
            <div>
                <TextField 
                    name="categoryDescription"
                    placeHolder="Category Description"
                    value={categoryDetails.values.categoryDescription}
                    onChange={(name,value) => handleChange(name,value)}
                    onBlur={categoryDetails.handleBlur}
                    error={categoryDetails.touched.categoryDescription && categoryDetails.errors.categoryDescription}
                    errorMessage={categoryDetails.touched.categoryDescription && categoryDetails.errors.categoryDescription}/>
            </div>
          </div>
          <div className="modal-footer">
            <LoadingButton 
               name='Close'
               disabled={btnLoaidng}
               onClick={onClose}
               btnColor='btn-secondary' />
            <LoadingButton
               name='Save'
               loading={btnLoaidng}
               onClick={categoryDetails.handleSubmit}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryPopup;
