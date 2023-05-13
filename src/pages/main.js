import React from "react";
import * as Yup from "yup";
import Select from "react-select";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useNavigate } from "react-router-dom";
import "../main.css";

const Countries = [
  { label: "Albania", value: "Albania" },
  { label: "Argentina", value: "Argentina" },
  { label: "Austria", value: "Austria" },
  { label: "Cocos Islands", value: "Cocos Islands" },
  { label: "Kuwait", value: "Kuwait" },
  { label: "Sweden", value: "Sweden" },
  { label: "Venezuela", value: "Venezuela" },
];
const signUpSchema = Yup.object({
  region: Yup.object({
      value: Yup.string().required("Country is required"),
      label: Yup.string().required("Country is required"),
    })
    .required("Required"),
  hq: Yup.object({
      value: Yup.string().required("Country is required"),
      label: Yup.string().required("Country is required"),
    })
    .required("Required"),
  emp: Yup.object({
      value: Yup.string().required("Country is required"),
      label: Yup.string().required("Country is required"),
    })
    .required("Required"),
});
const initialValues = {
  region: null,
  hq: null,
  emp: null,
};
const Main = () => {
  // const [selected, setSelected] = useState(Countries.label);
  // const Handler = e=>{
  //   setSelected(e.label);
  // }
  //   const handleChange = event => {
  //     console.log(event.target.value);
  //     setSelected(event.target.value);
  //   };
  // //   const validate = values=>{
  //     const errors={}
  //     return errors
  //   }
  // const formik = useFormik({
  //   initialValues:{
  //   },
  //   validate,
  //   onSubmit:value=>{
  //     console.log(value)
  //   }
  // })
  const navigate = useNavigate();
  const navigateToSecond = (url) => {
    navigate(url);
  };
  // const { values, touched, setFieldValue, handleChange, handleSubmit, errors } =
  //   useFormik({
  //     initialValues: initialValues,
  //     validationSchema: signUpSchema,
  //     onSubmit: (values, action) => {
  //       console.log(values);
  //       action.resetForm();
  //       navigateToSecond("/second");
  //     },
  //   });
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   navigate('/second');
  // };
  return (
    <div>
      <div className="mainContainer">
        <div className="mainSpacing">
          <div className="mainImage">
            <div className="logoMain">
              <img className="logoStyle" src="logo.png" />
            </div>
            <div className="registerMain">
              <h5>Register</h5>
              <div className="mainForm">
                <Formik
                  initialValues={initialValues}
                  validationSchema={signUpSchema}
                  onSubmit={(values) => {
                    console.log(values);
                    navigateToSecond("/second");
                  }}
                >
                  {({ errors, touched, values, setFieldValue }) => (
                    <Form>
                      <div className="regionDiv">
                        <div className="labelStyle">
                          <label className="labelMain">
                            Select Region: <span className="asterick">*</span>
                          </label>
                        </div>
                        <Select
                          // as="select"
                          // options={Countries}
                          name="region"
                          id="region"
                          options={Countries}
                          value={values.region}
                          onChange={(option) => setFieldValue("region", option)}
                          onBlur={(field) => {
                            if (field.value === "") {
                              setFieldValue("region", null);
                            }
                          }}
                          className="selectStyle"
                          // value={values.region}
                          // onChange={(e) => {
                          //   console.log(e.value);
                          //   console.log(e);
                          //   setFieldValue("region", e.value);
                          // }}
                        />

                        {/* <ErrorMessage name="region" /> */}
                        {errors.region && touched.region ? (
                          <p className="errorStyling">{errors.region}</p>
                        ) : null}
                      </div>
                      <div className="HQDiv">
                        <div className="labelStyle">
                          <label className="labelMain">
                            Select HQ: <span className="asterick">*</span>
                          </label>
                        </div>

                        <Select
                          // as="select"
                          // options={Countries}
                          name="hq"
                          id="hq"
                          className="selectStyle"
                          options={Countries}
                          value={values.hq}
                          onChange={(option) => setFieldValue("hq", option)}
                          onBlur={(field) => {
                            if (field.value === "") {
                              setFieldValue("hq", null);
                            }
                          }}
                          // value={values.hq}
                          // onChange={(e) => {
                          //   console.log(e.value);
                          //   setFieldValue("hq", e.value);
                          // }}
                        />
                        {/* <ErrorMessage name="hq" /> */}
                        {errors.hq && touched.hq ? (
                          <p className="errorStyling">{errors.hq}</p>
                        ) : null}
                      </div>
                      <div className="empNameDiv">
                        <div className="labelStyle">
                          <label className="labelMain">
                            Select Employee Name:{" "}
                            <span className="asterick">*</span>
                          </label>
                        </div>

                        <Select
                          // as="select"
                          // options={Countries}
                          name="emp"
                          id="emp"
                          className="selectStyle"
                          options={Countries}
                          value={values.emp}
                          onChange={(option) => setFieldValue("emp", option)}
                          onBlur={(field) => {
                            if (field.value === "") {
                              setFieldValue("emp", null);
                            }
                          }}

                          // value={values.emp}
                          // onChange={(e) => {
                          //   console.log(e.value);
                          //   setFieldValue("emp", e.value);
                          // }}
                        />

                        {/* <ErrorMessage name="emp" /> */}

                        {errors.emp && touched.emp ? (
                          <p className="errorStyling">{errors.emp}</p>
                        ) : null}
                      </div>
                      <div className="submitDiv">
                        <button
                          type="submit"
                          className="submitBtn"
                          // onClick={() => navigateToSecond("/second")}
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
