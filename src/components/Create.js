import React from 'react';
import Header3 from './Header3';
import {Formik} from 'formik';

function Create() {
    return (
        <div>
            <Header3 />

            <div className="row pt-3">
                <div className="col-1"></div>
                <div className="col-10 r2 pt-1 pb-3">
                    <h3 className="p-4 pb-5">Create Blood Request</h3>
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
                                
                                <label>Blood Group*</label>
                                <input className="form-control em"
                                    type="text"
                                    name="text"
                                    placeholder="B+"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.text && touched.text && errors.text}
                                
                                <label>Adress*</label>
                                <input className="form-control adress"
                                    type="text"
                                    name="text"
                                    placeholder="Gali Khadim Hussian Wali Muhallah Arraianwala"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.text}
                                />
                                {errors.text && touched.text && errors.text}
                                <label>Description*</label>
                               
                                <textarea name="comment" form="usrform" className="form-control pass">Lorem remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</textarea>
                                {errors.textarea && touched.textarea && errors.textarea}
                                <button type="submit" disabled={isSubmitting} className="update p-2 mt-3  w-100">
                                    <i class="far fa-paper-plane mr-2"></i>&nbsp;&nbsp;Create
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
}

export default Create
