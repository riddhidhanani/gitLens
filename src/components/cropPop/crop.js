import React, { useRef, useState, createRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "./crop.css";
import { IoClose } from "react-icons/io5";

// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolid, faXmark } from "@fortawesome/free-solid-svg-icons";

const Crop = (props) => {
  //   console.log(".....", props);
  const closeBtn = () => {
    // console.log(props);
    props.setPopup(false);
  };

  return (
    <div className="UpperMost">
      <div className="cropContainer">
        <div className="cropSpacing">
          <div className="mainCrop">
            <div className="cropHead">
              <h2>Crop Image</h2>
              <IoClose className="cancelButton" onClick={closeBtn} />
            </div>
            <div className="cropMain">
              <Cropper
                ref={props.cropperRef}
                style={{ height: 300, width: 300, margin: "auto" }}
                dragMode="move"
                aspectRatio={1 / 1}
                autoCropArea={1.5}
                restore={false}
                center={false}
                highlight={false}
                cropBoxMovable={true}
                cropBoxResizable={false}
                toggleDragModeOnDblclick={false}
                zoomTo={0.3}
                initialAspectRatio={1}
                preview=".img-preview"
                src={props.image}
                viewMode={1}
                minCropBoxHeight={40}
                minCropBoxWidth={40}
                background={false}
                responsive={true}
                checkOrientation={false}
                guides={true}
              />

              <div>
                <div className="box">
                  <button
                    className="cropButton"
                    onClick={() => {
                      props.getCropData();
                    }}
                  >
                    Crop Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crop;
