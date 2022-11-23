import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { Formik, Field, Form } from 'formik';
import { basicsInfoSchema } from '../schemas/basicsInfoSchema';
const BasicInfo = () => {
    const navigate = useNavigate();
    const { values, errors, touched, isValid, dirty, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                mobileno: "",
                dob: "",
                gender: "",

            },
            validationSchema: basicsInfoSchema,
            onSubmit: (values, action) => { }

        });

    return (
        <div className='form'>
            <h1>Basic Info</h1>
            <Formik>
                <Form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="firstName">First Name :</label></td>
                                <td><Field id="firstName" name="firstName" placeholder="Jane" onChange={handleChange}
                                    onBlur={handleBlur} /></td>
                                {errors.firstName && touched.firstName ? (
                                    <td>  <p className="form-error">{errors.firstName}</p></td>
                                ) : null}
                            </tr>
                            <tr>
                                <td><label htmlFor="lastName">Last Name :</label></td>
                                <td><Field id="lastName" name="lastName" placeholder="Doe" onChange={handleChange}
                                    onBlur={handleBlur} /></td>
                                {errors.lastName && touched.lastName ? (
                                    <td>  <p className="form-error">{errors.lastName}</p></td>
                                ) : null}
                            </tr>
                            <tr>
                                <td> <label htmlFor="email">Email :</label></td>
                                <td>
                                    <Field
                                        id="email"
                                        name="email"
                                        placeholder="jane@acme.com"
                                        type="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </td>
                                {errors.email && touched.email ? (
                                    <td>  <p className="form-error">{errors.email}</p></td>
                                ) : null}
                            </tr>
                            <tr>
                                <td> <label htmlFor="mobileno">Mobile No :</label></td>
                                <td><Field id="mobileno" name="mobileno" type="number" placeholder="98****4**3" onChange={handleChange}
                                    onBlur={handleBlur} /></td>
                                {errors.mobileno && touched.mobileno ? (
                                    <td>  <p className="form-error">{errors.mobileno}</p></td>
                                ) : null}
                            </tr>
                            <tr>
                                <td> <label htmlFor="dob">Date of birth :</label></td>
                                <td><Field type="date" id="dob" name="dob"
                                    onChange={handleChange}
                                    onBlur={handleBlur}


                                /></td>
                                {errors.dob && touched.dob ? (
                                    <td><p className="form-error">{errors.dob}</p></td>
                                ) : null}
                            </tr>
                            <tr>
                                <td> <p>Gender :</p></td>
                                <td><label htmlFor="male">Male</label><Field type="radio" id="male" name="gender" onChange={handleChange}
                                    onBlur={handleBlur} /></td>
                                <td> <label htmlFor="female">Female</label><Field type="radio" id="female" name="gender" onChange={handleChange}
                                    onBlur={handleBlur} /></td>
                                {errors.gender && touched.gender ? (
                                    <td>  <p className="form-error">{errors.gender}</p></td>
                                ) : null}
                            </tr>
                            <tr>
                                <td><button type='submit' onClick={() => { localStorage.setItem("userData", JSON.stringify(values)), navigate("/advanceinfo") }} disabled={!(isValid & dirty)}>Next</button></td>
                            </tr>
                        </tbody>
                    </table>
                </Form>
            </Formik>
        </div>
    )
}

export default BasicInfo