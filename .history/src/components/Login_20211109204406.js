import React from 'react';
import {Formik} from 'formik';


function Login() {
    return (
       
            <div className="container">
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        <img src="./images/download.jfif" alt="there is no image" className="img"/>
                        <h2 className="blood text-center"><span style={{color:'#FF3B3B'}}>Blood</span> Center</h2><br>
                        </br>
                        <h5 className="con text-center">Connecting Lives</h5>
                    </div>
                </div>
                <div className="container">
                    <div className="row p-3">
                        <div>       
                            <Formik 
                                initialValues={{ email: '', password: '' }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* and other goodies */
                                }) => (
                                <form onSubmit={handleSubmit} className="formik">
                                    <i className="fas fa-portrait"></i>
                                        <input
                                        type="email" className="placehorder form-control em"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder="Mobile Number"
                                            
                                        />
                                    
                                        {errors.email && touched.email && errors.email}
                                    <i className="fas fa-unlock-alt"></i>
                                        <input
                                        type="password" className="placehorder form-control pass"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            placeholder="Password"
                                        />
                                        
                                        {errors.password && touched.password && errors.password}
                                    <div className="row d-flex align-items-center justify-content-center">
                                        <button type="submit" disabled={isSubmitting} className="sign p-2 mt-3 w-100">
                                            <i className="fas fa-power-off mr-2 "></i>Sign In
                                        </button>
                                        <button className="donor p-2 mt-3 ml-2 w-100">
                                            <i className="fas fa-heartbeat mr-1 "></i>Become a donor
                                        </button>
                                        <a href="#" className="forgot p-2">Forgot Password?</a>

                                    </div>
                                    
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                    <a href="/home" className="text-decoration-none forgot p-2">Skip For Now</a>
                </div>
            </div>
    )
}

export default Login
