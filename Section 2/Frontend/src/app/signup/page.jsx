"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be minimum 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(8, "Password should be minimum 8 characters")
    .required("Password is required"),
});
const page = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.password === values.confirmPassword) {
        console.log(values);
      } else {
        console.log("Password do not match");
      }
    },
  });

  return (
    <div>
      <div className="row align-items-center vh-100">
        <div className="col-md-3 mx-auto">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center">Brand Logo</h2>
              <h2 className="text-center">SignUp</h2>

              <form onSubmit={formik.handleSubmit}>
                <div class="mb-3">
                  <label for="username" class="form-label">
                    Username
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id="username"
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.errors.username ? (
                    <div>{formik.errors.username}</div>
                  ) : null}
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email Address
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id="email"
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    class="form-control"
                    name=""
                    id="password"
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    class="form-control"
                    name=""
                    id="confirmPassword"
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  {formik.errors.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                  ) : null}
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Remember Me
                  </label>
                </div>

                <button type="submit" class="btn btn-dark w-100 my-4">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
