import React, { useRef } from "react";
import "../third.css";
import { TfiDownload } from "react-icons/tfi";
import { IoIosArrowBack } from "react-icons/io";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import { useNavigate } from "react-router-dom";

const Third = (props) => {
  // const navigate = useNavigate();
  // const navigateBack = (url) => {
  //     navigate(url);
  //   };
  console.log("........", props.isPage1);
  const stageRef = useRef();
  const handleDownloadCLick = () => {
    const dataURL = stageRef.current.toDataURL();
    // console.log(dataURL);
    const link = document.createElement("a");
    link.download = props.isName;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stageRefDouble = useRef();
  const handleDownloadCLickDouble = () => {
    const dataURL = stageRefDouble.current.toDataURL();
    // console.log(dataURL);
    const link = document.createElement("a");
    link.download = props.isName;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const backgroundImage = new window.Image();
  backgroundImage.src = "world.png";
  const stageWidth = 297;
  const stageHeight = 242;

  const backgroundImageDouble = new window.Image();
  backgroundImageDouble.src = "twoCircle.png";
  const StageWidth = 310;
  const StageHeight = 252;

  const overlayImage = new window.Image();
  overlayImage.src = props.cropData;

  // calculate the scaling factor needed to fit the background image within the canvas dimensions
  const scaleX = stageWidth / backgroundImage.width;
  const scaleY = stageHeight / backgroundImage.height;
  const scale = Math.min(scaleX, scaleY);

  const ScaleX = StageWidth / backgroundImage.width;
  const ScaleY = StageHeight / backgroundImage.height;
  const Scale = Math.min(ScaleX, ScaleY);

  const changeState = () => {
    props.setPage1(false);
  };

  return (
    <div>
      <div className="thirdContainer">
        <div className="thirdSpacing">
          <div className="mainImgThird">
            <div className="logoMain">
              <img className="logoStyle" src="logo.png" />
            </div>
            <div className="arrowDiv">
              <IoIosArrowBack className="iconStyle" onClick={changeState} />
            </div>
            <div className="imageCanvasMain">
              <div className="singleCanvas">
                <Stage
                  ref={stageRef}
                  width={800}
                  height={800}
                  style={{ zoom: "0.3", margin: "auto" }}
                >
                  <Layer>
                    <KonvaImage
                      image={overlayImage}
                      height={565}
                      width={570}
                      x={112}
                      y={118}
                    />
                    <KonvaImage
                      image={backgroundImage}
                      width={800}
                      height={800}
                    />
                  </Layer>
                </Stage>
                <button
                  className="downloadBtnStyle"
                  onClick={handleDownloadCLick}
                >
                  <TfiDownload />
                </button>
              </div>
              <div className="singleCanvas">
                <Stage
                  ref={stageRefDouble}
                  width={800}
                  height={700}
                  style={{ zoom: "0.3", margin: "auto" }}
                >
                  <Layer>
                    <KonvaImage
                      image={overlayImage}
                      height={502}
                      width={445}
                      x={355}
                      y={111}
                    />
                    <KonvaImage
                      image={backgroundImageDouble}
                      width={800}
                      height={700}
                    />
                  </Layer>
                </Stage>
                <button
                  className="downloadBtnStyle"
                  onClick={handleDownloadCLickDouble}
                >
                  <TfiDownload />
                </button>
              </div>
              <div className="singleCanvas">
                <Stage
                  ref={stageRefDouble}
                  width={800}
                  height={700}
                  style={{ zoom: "0.3", margin: "auto" }}
                >
                  <Layer>
                    <KonvaImage
                      image={overlayImage}
                      height={502}
                      width={445}
                      x={355}
                      y={111}
                    />
                    <KonvaImage
                      image={backgroundImageDouble}
                      width={800}
                      height={700}
                    />
                  </Layer>
                </Stage>
                <button
                  className="downloadBtnStyle"
                  onClick={handleDownloadCLickDouble}
                >
                  <TfiDownload />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
