import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { AdvanceInfoSchema } from '../schemas/AdvanceInfoSchema';
const AdvanceInfo = () => {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, [])
  const navigate = useNavigate();
  const { values, errors, touched, isValid, dirty, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        address: "",
        country: "",
        state: "",
        pincode: "",
        getdate: "",
        gettime: "",
      },
      validationSchema: AdvanceInfoSchema,
      onSubmit: (values, action) => { }

    });
  return (
    <div className='form'>
      <h1>Advance Info</h1>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="address">Address :</label></td>
                <td><Field id="address" name="address" placeholder="Jane" onChange={handleChange}
                  onBlur={handleBlur} /></td>
                {errors.address && touched.address ? (
                  <td>  <p className="form-error">{errors.address}</p></td>
                ) : null}
              </tr>
              <tr>
                <td><label htmlFor="country">Country:</label></td>
                <td><Field id="country" name="country" placeholder="India" onChange={handleChange}
                  onBlur={handleBlur} /></td>
                {errors.country && touched.country ? (
                  <td>  <p className="form-error">{errors.country}</p></td>
                ) : null}
              </tr>
              <tr>
                <td> <label htmlFor="state">State :</label></td>
                <td>
                  <Field
                    id="state"
                    name="state"
                    placeholder="Gujarat"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </td>
                {errors.state && touched.state ? (
                  <td>  <p className="form-error">{errors.state}</p></td>
                ) : null}
              </tr>
              <tr>
                <td><label htmlFor="pincode">Pincode :</label></td>
                <td><Field id="pincode" name="pincode" type=" number" placeholder="362260" onChange={handleChange}
                  onBlur={handleBlur} /></td>
                {errors.pincode && touched.pincode ? (
                  <td>  <p className="form-error">{errors.pincode}</p></td>
                ) : null}
              </tr>
              <tr>
                <td><label htmlFor="getemail">Recieve email ? :</label></td>
                <td>
                  <input type="checkbox" id="vehicle1" name="getemail" value="recieveEmail" onChange={handleChange}
                    onBlur={handleBlur} />
                </td>
                {errors.getemail && touched.getemail ? (
                  <td>  <p className="form-error">{errors.getemail}</p></td>
                ) : null}
              </tr>
              <tr>
                <td><label htmlFor="getFile">choose file :</label></td>
                <td>
                  <Field type="file" id="getFile" name="getFile" onChange={handleChange}
                    onBlur={handleBlur} />
                </td>
                {errors.getemail && touched.getemail ? (
                  <td>  <p className="form-error">{errors.getemail}</p></td>
                ) : null}
              </tr>
              <tr>
                <td><label htmlFor="date">Date for call :</label></td>
                <td>
                  <Field type="date" id="getdate" name="getdate" onChange={handleChange}
                    onBlur={handleBlur} />
                </td>
                {errors.date && touched.date ? (
                  <td>  <p className="form-error">{errors.date}</p></td>
                ) : null}
              </tr>
              <tr>
                <td><label htmlFor="time">Date for call :</label></td>
                <td>
                  <Field type="time" id="gettime" name="gettime" onChange={handleChange}
                    onBlur={handleBlur} />
                </td>
                {errors.date && touched.date ? (
                  <td>  <p className="form-error">{errors.date}</p></td>
                ) : null}
              </tr>
              <tr>
                <td><button onClick={() => navigate("/")}>previous</button></td>
                <td><button type='submit' onClick={() => {
                  localStorage.setItem("userData", JSON.stringify({ ...userData, values }))
                  navigate("/course")
                }}
                  disabled={!(isValid & dirty)}>
                  Next
                </button></td>
              </tr>
            </tbody>
          </table>
        </Form>
      </Formik>
    </div>
  )
}

export default AdvanceInfo