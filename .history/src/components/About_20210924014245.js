import React from 'react';
import Header from './Header';
import {Formik} from 'formik';

function About() {
    return (
        <>
            <Header/>
            <div className="row r1">
                <div className="col-1"></div>
                <div className="col-5">
                    <h3 className="kelly">Kelly buft</h3>
                    <h6>BLDCTN400036</h6>
                </div>
                <div className="col-5">
                    <img src="./images/girl.jpg" className=" d-flex align-items-center justify-content-center girl" />
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10 r2 pt-1 pb-3">
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
                            <form onSubmit={handleSubmit}>
                                <label>Name*</label>
                                <input className="placehorder form-control name"
                                    type="text"
                                    name="name"
                                    placeholder="Kelly buft"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    
                                />
                
                                {errors.email && touched.email && errors.email}
                                <label>Email*</label>
                                <input className="placehorder form-control em"
                                    type="email"
                                    name="email"
                                    placeholder="Kellybuft@mail.com"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <label>Mobile*</label>
                                <input className="placehorder form-control num"
                                    type="number"
                                    name="number"
                                    placeholder="0825416289317"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <label>Adress*</label>
                                <input className="placehorder form-control adress"
                                    type="email"
                                    name="email"
                                    placeholder="Gali Khadim Hussian Wali Muhallah Arraianwala"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <label>Password*</label>
                                <input className="placehorder form-control pass"
                                    type="password"
                                    name="password"
                                    placeholder="****************"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                                <button type="submit" disabled={isSubmitting} className="update p-2 mt-3  w-100">
                                    <i class="far fa-paper-plane mr-2"></i>Update
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
                <div className="col-1"></div>
            </div>
        
        </>
    )
}

export default About
