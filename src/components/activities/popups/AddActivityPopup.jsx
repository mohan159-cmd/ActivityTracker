import { useFormik } from "formik";
import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import * as yup from "yup";
import { valdiationMessages } from "../../../utlis/validationMessages";
import TextField from "../../common/input-fields/TextField";
import LoadingButton from "../../common/input-fields/LoadingButton";
import { toast } from "react-toastify";
import { createActivity } from "../services/services";
import DateTimePicker from "../../common/input-fields/DateTimePicker";
import FileUploadField from "../../common/input-fields/FileUploadField";

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
    'catlogId': secureLocalStorage.getItem('catlogId'),
    'startDate': '',
    'endDate': '',
    'file': ''
  }

  //#region variables
  const [btnLoaidng,setBtnLoading] = useState(false);

  //#region change events
  const handleFileUpload = (name,file) => {
    if(file){
      const formData = new FormData();
      formData.append(name, file, file.name);
      handleChange(name, file);
    }
    else{
      handleChange(name,null);
    }
  }

  const handleChange = (name,value) => {
    activityDetails.setFieldValue(name,value)
  }

  //#region click events
  const onSaveClick = () => {
    setBtnLoading(true);
    createNewActivity();
  }

  //#region api post calls
  const createNewActivity = async() =>{
    const requestedBody = {
        "catlogId": activityDetails.values.catlogId,
        "name": activityDetails.values.activityName,
        "description": activityDetails.values.activityDescription,
        "createdDate": new Date(),
        "startDate": activityDetails.values.startDate,
        "endDate": activityDetails.values.endDate
    };

    const formData = new FormData();
    formData.append('file', activityDetails.values.file);
    formData.append('activityDetails', JSON.stringify(requestedBody));

    const data = await createActivity(formData);
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
            <div className="space-between margin-top-15">
              <div></div>
              <div>
                <FileUploadField 
                  label="Upload File"
                  name="file"
                  value={activityDetails.values.file}
                  onChange={(name,file) => handleFileUpload(name,file)}
                  error={activityDetails.touched.file && activityDetails.errors.file}
                  errorMessage={activityDetails.touched.file && activityDetails.errors.file} />
              </div>
            </div>
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
            <div>
              <DateTimePicker 
                  name="startDate"
                  placeHolder="Start Date"
                  value={activityDetails.values.startDate}
                  onChange={(name,value) => handleChange(name,value)} />
            </div>
            <div>
              <DateTimePicker 
                  name="endDate"
                  placeHolder="End Date"
                  value={activityDetails.values.endDate}
                  onChange={(name,value) => handleChange(name,value)} />
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
