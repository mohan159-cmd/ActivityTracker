import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TextField from '../../common/input-fields/TextField';
import * as yup from 'yup';
import { valdiationMessages } from '../../../utlis/validationMessages';
import { createNewUser } from '../services/services';
import { toast } from 'react-toastify';
import LoadingButton from '../../common/input-fields/LoadingButton';

const Signup = () => {

  //#region initialdata
  const initialData = {
      'firstName': '',
      'lastName': '',
      'email': '',
      'password': '',
      'confirmPassword': ''
  }  

  //#region variables
  const navigate = useNavigate();
  const [btnLoaidng,setBtnLoaidng] = useState(false);

  //#region change events
  const handleChange = (name,value) => {
    userDetails.setFieldValue(name,value)
  }

  //#region click events
  const onLoginClick = () => {
    navigate("/login-page");
  }

  const onSignUpClick = () => {
    createUser();
  }

  //#region api post calls
  const createUser = async() =>{
      setBtnLoaidng(true);
      const requestedBody = {
          "firstName": userDetails.values.firstName,
          "lastName": userDetails.values.lastName,
          "email": userDetails.values.email,
          "password": userDetails.values.password
      }
      const data = await createNewUser(requestedBody);
      if(data.responseCode === 200){
        toast.success("User Created Successfully,Navigating to login page", {
            position: "bottom-right"
        })
        navigate('/login-page');
      }
      else{
        setBtnLoaidng(false);
        toast.error("uanble to create user", {
          position: "bottom-right",
          theme: "colored",
        })
      }
  }

  //#region formik validations
  const vaildationSchema =  yup.object({
    firstName: yup.string().required(valdiationMessages.REQUIRED),
    lastName: yup.string().required(valdiationMessages.REQUIRED),
    email: yup.string().email(valdiationMessages.EMAIL).required(valdiationMessages.REQUIRED),
    password: yup.string().required(valdiationMessages.REQUIRED),
    confirmPassword: yup.string().required(valdiationMessages.REQUIRED)
  })

  const userDetails = useFormik({
    initialValues: initialData,
    validationSchema: vaildationSchema,
    onSubmit : (values) => {
        onSignUpClick();
    }
  })

  //#region return
  return (
    <>
    <div style={{ position: 'relative', width: '100%', height: '120vh' }}>
        <img src='/img/siteimages/login-background.jpg' alt="login-background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="login-container" 
             style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <b className="d-flex justify-content-center mb-4">
                        SIGN UP
                    </b>
                    <form>
                        <div className="form-outline mb-2">
                            <TextField 
                               name='firstName'
                               placeHolder='FirstName'
                               value={userDetails.values.firstName}
                               onChange={(name,value) => handleChange(name,value)}
                               onBlur={userDetails.handleBlur}
                               error={userDetails.touched.firstName && userDetails.errors.firstName}
                               errorMessage={userDetails.touched.firstName && userDetails.errors.firstName}/>
                        </div>
                        <div className="form-outline mb-2">
                            <TextField 
                               name='lastName'
                               placeHolder='LastName'
                               value={userDetails.values.lastName}
                               onChange={(name,value) => handleChange(name,value)}
                               onBlur={userDetails.handleBlur}
                               error={userDetails.touched.lastName && userDetails.errors.lastName}
                               errorMessage={userDetails.touched.lastName && userDetails.errors.lastName}/>
                        </div>
                        <div className="form-outline mb-2">
                            <TextField 
                               name='email'
                               placeHolder='Email'
                               value={userDetails.values.email}
                               onChange={(name,value) => handleChange(name,value)}
                               onBlur={userDetails.handleBlur}
                               error={userDetails.touched.email && userDetails.errors.email}
                               errorMessage={userDetails.touched.email && userDetails.errors.email}/>
                        </div>
                        <div className="form-outline mb-2">
                            <TextField 
                               name='password'
                               placeHolder='Password'
                               value={userDetails.values.password}
                               onChange={(name,value) => handleChange(name,value)}
                               onBlur={userDetails.handleBlur}
                               error={userDetails.touched.password && userDetails.errors.password}
                               errorMessage={userDetails.touched.password && userDetails.errors.password}/>
                        </div>
                        <div className="form-outline mb-4">
                            <TextField 
                               name='confirmPassword'
                               placeHolder='Confirm Password'
                               value={userDetails.values.confirmPassword}
                               onChange={(name,value) => handleChange(name,value)}
                               onBlur={userDetails.handleBlur}
                               error={userDetails.touched.confirmPassword && userDetails.errors.confirmPassword}
                               errorMessage={userDetails.touched.confirmPassword && userDetails.errors.confirmPassword}/>
                        </div>
                        <div className="d-flex justify-content-center mb-2">
                           <LoadingButton 
                              name="SIGN UP"
                              loading={btnLoaidng}
                              onClick={userDetails.handleSubmit}/>
                        </div>
                        <div className="text-center mb-2">
                            <p>Already have an account? <a href="#" onClick={onLoginClick}>Sign In</a></p>
                            <p> <a href="/">Back to home page</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </> 
  )
}

export default Signup