import React, { useRef, useState, createRef } from "react";
import "../second.css";
import { IoIosArrowBack } from "react-icons/io";
import "cropperjs/dist/cropper.css";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik";
import Crop from "../components/cropPop/crop";
import Third from "./third";

const signUpSchema = Yup.object().shape({
  names: Yup.string().min(2).max(20).required("Please Enter Doctor Name"),
  imageIn: Yup.mixed().required("Select Image"),
});
const initialValuesSec = {
  names: "",
  imageIn: "",
};
/**
 * *Hello method
 * !If done this{} than will be error
 * todo: Solve above error
 * ?How to solve this error
 * @param {*} props 
 * @returns 
 * !Changes done in order to do new commit for demo of Git Lens
 */

const Second = (props) => {
  const [image, setImage] = useState("gimg.png");
  const [cropData, setCropData] = useState("gimg.png");
  const [popup, setPopup] = useState(false);
  const [isPage1, setPage1] = useState(false);
  const [isName, setName] = useState("Doctor");

  const cropperRef = createRef();

  const handleClickOpen = () => {
    setPopup(!popup);
  };

  const navigate = useNavigate();
  const navigateToThird = (url) => {
    navigate(url);
  };
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      setPopup(false);
      // console.log("croppedData", getCropData);
    }
  };
  const fileRef = useRef(null);
  // const {
  //   values,
  //   touched,
  //   setFieldValue,
  //   handleBlur,
  //   handleChange,
  //   handleSubmit,
  //   errors,
  // } = useFormik({
  //   initialValues: initialValuesSec,
  //   validationSchema: signUpSchema,
  //   onSubmit: (values, action) => {
  //     setName(values.name);
  //   },
  // onChange: (e) => {
  //   e.preventDefault();
  //   let files;
  //   if (e.dataTransfer) {
  //     files = e.dataTransfer.files;
  //   } else if (e.target) {
  //     files = e.target.files;
  //   }
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImage(reader.result);
  //   };
  //   reader.readAsDataURL(files[0]);
  // },
  // });
  // const okBtn = () => {
  //   console.log("Submit Button");
  // };
  return (
    <>
      {!isPage1 ? (
        <div className="secondContainer">
          <div className="secondSpacing">
            <div className="mainImage">
              <div className="logoMain">
                <img className="logoStyle" src="logo.png" />
              </div>
              <div className="arrowDiv">
                <IoIosArrowBack
                  className="iconStyle"
                  onClick={() => navigateToThird("/")}
                />
              </div>
              <div className="doctorMainForm">
                <Formik
                  initialValues={initialValuesSec}
                  validationSchema={signUpSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setName(values.names);
                    setPage1(true);
                    // navigate("/third")
                    setSubmitting(false);
                  }}
                >
                  {({
                    errors,
                    touched,
                    values,
                    setFieldValue,
                    isSubmitting,
                  }) => (
                    <Form>
                      <div className="inputNameMain">
                        <div className="doctorLabel">
                          <label style={{ color: "black" }}>
                            Name of Doctor
                          </label>
                        </div>
                        <Field
                          type="text"
                          name="names"
                          className="nameInput"
                          // onChange={(option) => setFieldValue("name", option)}
                          //     onBlur={(field) => {
                          //       if (field.value === "") {
                          //         setFieldValue("name", null);
                          //       }
                          //     }}
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                        />
                        {/* {errors.names && touched.names ? (
                  <p className="errorStyling">{errors.names}</p>
                ) : null}  */}

                        <ErrorMessage name="names" className="error" />
                      </div>

                      <div className="chooseImageDiv">
                        {/* <Field name="imageIn">
                        {({ field, form }) => ( */}
                        <div>
                          <input
                            ref={fileRef}
                            hidden
                            name="imageIn"
                            id="imageIn"
                            type="file"
                            // {...field}
                            // accept="image/*"
                            onChange={(e) => {
                              setFieldValue(
                                "imageIn",
                                e.currentTarget.files[0]
                              );
                              // e.preventDefault();
                              let files;
                              if (e.dataTransfer) {
                                files = e.dataTransfer.files;
                              } else if (e.target) {
                                files = e.target.files;
                              }
                              const reader = new FileReader();
                              reader.onload = () => {
                                setImage(reader.result);
                              };
                              reader.readAsDataURL(files[0]);
                              handleClickOpen();
                            }}
                            className="styleChooseImage"
                          />
                        </div>
                        {/* )}
                      </Field> */}

                        <div className="buttonUploadDiv">
                          <button
                            onClick={() => fileRef.current.click()}
                            className="uploadButton"
                          >
                            <img src={cropData} className="inImage" />
                          </button>
                        </div>
                        {/* {errors.imageIn && touched.imageIn ? (
                        <p className="errorStyling">{errors.imageIn}</p>
                      ) : null} */}
                        {/* <ErrorMessage name="imageIn" className="errorStyling"/> */}
                      </div>

                      <div className="submitDivSecond">
                        <button
                          type="submit"
                          className="submitBtnSecond"
                          disabled={isSubmitting}
                          // onClick={() => okBtn()}
                          // onClick={navigateToSecond("/third")}
                          // onClick={() => ()("/second")}
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
      ) : (
        <Third
          cropData={cropData}
          isName={isName}
          isPage1={isPage1}
          setPage1={setPage1}
        />
      )}

      {popup ? (
        <Crop
          image={image}
          getCropData={getCropData}
          cropperRef={cropperRef}
          setPopup={setPopup}
        />
      ) : (
        " "
      )}
    </>
  );
};

export default Second;
