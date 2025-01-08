import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '../../common/input-fields/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { valdiationMessages } from '../../../utlis/validationMessages';
import { checkLoginCredentials } from '../../services/services';
import { toast } from 'react-toastify';
import LoadingButton from '../../common/input-fields/LoadingButton';
import { getUserDetailsByEmailId } from '../services/services';
import { useUserContext } from '../../../store/ContextAPIs';
import secureLocalStorage from 'react-secure-storage';

const Login = () => {

  //#region initialdata
  const initialData = {
    email: '',
    password: ''
  }

  //#region variables
  const navigate = useNavigate();
  const { userContext, setUserContext } = useUserContext();
  const [btnLoading,setBtnLoading] = useState(false);

  //#region change events
    const handleChange = (name, value) => {
        loginDetails.setFieldValue(name, value)
    }

  //#region click events
  const onSignUpClick = () => {
    navigate('/signup-page')
  }

  const onLoginClick = () => {
    setBtnLoading(true);
    checkCredentials();
  }

  //#region formik validations
  const validationSchema = yup.object({
    email: yup.string().email(valdiationMessages.EMAIL).required(valdiationMessages.REQUIRED),
    password: yup.string().required(valdiationMessages.REQUIRED),
  });

  //#region api get calls
  const checkCredentials = async() =>{
    const requestedBody = {
        "email": loginDetails.values.email,
        "password": loginDetails.values.password
    }
    const data = await checkLoginCredentials(requestedBody);
    if(data.responseCode === 200){
        const userData = await getUserDetailsByEmailId(loginDetails.values.email);
        if(userData.responseCode === 200){
          secureLocalStorage.setItem('userId', userData.responseData[0].UserID);
          secureLocalStorage.setItem('emailId', userData.responseData[0].EmailId);
          setUserContext(userData.responseData[0]);
          navigate('/home-page');
        }
        else{
          setBtnLoading(false);
          toast.error("error fetching details", {
            position: "bottom-right",
            theme: "colored",
          }); 
        }
    }
    else{
      setBtnLoading(false);
      toast.error("Invalid Credentials", {
        position: "bottom-right",
        theme: "colored",
      });    
    }
  }

  const loginDetails = useFormik({
    initialValues: initialData,
    validationSchema: validationSchema,
    onSubmit: (values) => {
        onLoginClick();
    },
  });

  //#region return
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <img src='/img/siteimages/login-background.jpg' alt="login-background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="login-container" 
             style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <b className="d-flex justify-content-center mb-4">
                        LOGIN
                    </b>
                    <form>
                        <div data-mdb-input-init className="form-outline">
                            <TextField 
                                name='email'
                                placeHolder='Email'
                                value={loginDetails.values.email}
                                onChange={handleChange}
                                onBlur={loginDetails.handleBlur}
                                error={loginDetails.touched.email && loginDetails.errors.email}
                                errorMessage={loginDetails.touched.email && loginDetails.errors.email} />
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                            <TextField 
                                name='password'
                                placeHolder='Password'
                                value={loginDetails.values.password}
                                onChange={handleChange}
                                onBlur={loginDetails.handleBlur}
                                error={loginDetails.touched.password && loginDetails.errors.password}
                                errorMessage={loginDetails.touched.password && loginDetails.errors.password} />
                        </div>
                        <div className="mb-4 space-between">
                            <div></div>
                            <div className="col-md-6 d-flex justify-content-center space-between">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <LoadingButton
                                name="SIGN IN"
                                onClick={loginDetails.handleSubmit}
                                loading={btnLoading} />
                        </div>
                        <div className="text-center">
                            <p>Not a member? <a href="#" onClick={onSignUpClick}>Register</a></p>
                            <p> <a href="/">Back to home page</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Login