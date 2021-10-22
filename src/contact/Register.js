import React from 'react';
 import { useFormik } from "formik";
const Register = () => {
   const formik = useFormik({
     initialValues: {
       firstName: "",
       lastName: "",
       email: "",
     },
     onSubmit: (values) => {
       alert(JSON.stringify(values, null, 2));
     },
   });
    return (
      <div className="container w-50">
        <form onSubmit={formik.handleSubmit}>
          <label className="form-label mt-3 fs-5" htmlFor="firstName">
            First Name
          </label>
          <br />
          <input
            className="form-control"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <label className="form-label mt-3 fs-5" htmlFor="lastName">
            Last Name
          </label>
          <br />
          <input
            className="form-control"
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <label className="form-label  mt-3 fs-5" htmlFor="phoneNumber">
            Phone Number
          </label>
          <br />
          <input
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          <br />
          <label className="form-label  mt-3 fs-5" htmlFor="address">
            Address
          </label>
          <br />
          <input
            className="form-control"
            id="address"
            name="address"
            type="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <br />
          <label className="form-label  mt-3 fs-5" htmlFor="email">
            Email Address
          </label>
          <br />
          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <br />
          <button
            className="btn btn-warning fs-4 fw-bold my-4 px-5"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
}

export default Register
