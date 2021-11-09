import React from 'react';
import Header from './Header';
import { Formik } from 'formik';

function Register() {
    return (
        <div>
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
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">

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
                                            {/* <i className="fas fa-portrait"></i> */}
                                            <input
                                                type="email" className="placehorder p-3 form-control em"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                placeholder="Email"

                                            />

                                            {errors.email && touched.email && errors.email}
                                            {/* <i className="fas fa-mobile-alt"></i> */}
                                            <input
                                                type="number" className="placehorder p-3 form-control num"
                                                name="number"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.number}
                                                placeholder="Mobile Number"
                                            />

                                            {errors.number && touched.number && errors.number}
                                            {/* <i className="fas fa-disease"></i> */}
                                            <select name="bloodGroup" className="placehorder p-3 form-control bloodGroup">
                                                <option value="volvo">A +ve</option>
                                            </select>

                                            {errors.bloodGroup && touched.bloodGroup && errors.bloodGroup}
                                            {/* <i className="fas fa-map-marker-alt"></i> */}
                                            <input
                                                type="text" className="placehorder p-3 form-control city"
                                                name="city"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.city}
                                                placeholder="City"
                                            />

                                            {errors.city && touched.city && errors.city}
                                            {/* <i className="fas fa-unlock-alt"></i> */}
                                            <input
                                                type="password" className="placehorder p-3 form-control pass"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                placeholder="Password"
                                            />

                                            {errors.password && touched.password && errors.password}
                                            <div className="row d-flex align-items-center justify-content-center">
                                                <button type="submit" disabled={isSubmitting} className="sign p-2 mt-3 w-100">
                                                    <i class="fas fa-arrow-right mr-2"></i>Register
                                                </button>
                                                <a href="#" className="login p-2">Login Here!</a>
                                                
                                            </div>

                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
