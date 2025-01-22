import { useFormik } from "formik";
import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import * as yup from "yup";
import { valdiationMessages } from "../../../utlis/validationMessages";
import TextField from "../../common/input-fields/TextField";
import LoadingButton from "../../common/input-fields/LoadingButton";
import { toast } from "react-toastify";
import { createActivity } from "../services/services";

const AddActivityPopup = (props) => {

  //#region props
  const {
     onClose,
     getActivities
  } = props;

  //#region initialData
  const initialData = {
    'activityName': '',
    'activityDescription': '',
    'catlogId': secureLocalStorage.getItem('catlogId')
  }

  //#region variables
  const [btnLoaidng,setBtnLoading] = useState(false);

  //#region change events
  const handleChange = (name,value) => {
    activityDetails.setFieldValue(name,value)
  }

  //#region click events
  const onSaveClick = () => {
    setBtnLoading(true);
    createNewCatlog();
  }

  //#region api post calls
  const createNewCatlog = async() =>{
    const requestedBody = {
        "catlogId": activityDetails.values.catlogId,
        "name": activityDetails.values.activityName,
        "description": activityDetails.values.activityDescription,
        "createdDate": "2018-04-20",
        "startDate": "2024-01-01",
        "endDate": "2024-12-31"
    };
    const data = await createActivity(requestedBody);
    if(data.responseCode === 200){
      getActivities();
      toast.success("Activity Created Successfully", {
          position: "bottom-right"
      })
      onClose();
    }
    else{
      setBtnLoading(false);
      toast.error("unable to create activity", {
        position: "bottom-right",
        theme: "colored",
      })
    }
  }

  //#region formik validations
  const validationSchema = yup.object({
    activityName: yup
      .string()
      .required(valdiationMessages.REQUIRED),
    activityDescription: yup
      .string()
      .required(valdiationMessages.REQUIRED),
  })

  const activityDetails = useFormik({
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
            <h5 className="modal-title">ADD Activity</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body margin-top-minus-20">
            <div>
                <TextField 
                    name="activityName"
                    placeHolder="Activity Name"
                    value={activityDetails.values.activityName}
                    onChange={(name,value) => handleChange(name,value)}
                    onBlur={activityDetails.handleBlur}
                    error={activityDetails.touched.activityName && activityDetails.errors.activityName}
                    errorMessage={activityDetails.touched.activityName && activityDetails.errors.activityName}/>
            </div>
            <div>
                <TextField 
                    name="activityDescription"
                    placeHolder="Activity Description"
                    value={activityDetails.values.activityDescription}
                    onChange={(name,value) => handleChange(name,value)}
                    onBlur={activityDetails.handleBlur}
                    error={activityDetails.touched.activityDescription && activityDetails.errors.activityDescription}
                    errorMessage={activityDetails.touched.activityDescription && activityDetails.errors.activityDescription}/>
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
               onClick={activityDetails.handleSubmit}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddActivityPopup;
