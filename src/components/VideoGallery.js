import React, { useState, createRef } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "./VideoGallery.css";

const VideoGallery = () => {
  const [model, setModel] = useState(false);
  const data = [
    {
      id: 1,
      videoUri:
        "./Assets/Snapsave.app_68093235_368088457242857_1494909413717180416_n.mp4",
    },
    {
      id: 2,
      videoUri:
        "./Assets/Snapsave.app_82729874_3370072639701707_6961561333007384576_n.mp4",
    },
    {
      id: 3,
      videoUri:
        "./Assets/Snapsave.app_300052528_128633173228138_275841701752632099_n.mp4",
    },
    {
      id: 4,
      videoUri:
        "./Assets/Snapsave.app_305607682_442756357819549_1605584456196305918_n.mp4",
    },
    {
      id: 5,
      videoUri:
        "./Assets/Snapsave.app_306159508_612974726880053_5430037338403698174_n.mp4",
    },
    {
      id: 6,
      videoUri:
        "./Assets/Snapsave.app_310272967_600494764957301_2107930547896543555_n.mp4",
    },
  ];
  return (
    <>
      <h2>Video Gallery</h2>
      <div className="gallery">
        {data.map((item, index) => {
          let divRef = createRef;
          const openModel = () => {
            divRef.current.classList.remove("video");
            divRef.current.classList.add("model");
            setModel(true);
          };
          const closeModel = () => {
            divRef.current.classList.add("video");
            divRef.current.classList.remove("model");
            setModel(false);
          };
          return (
            <div ref={divRef} className="video" key={index}>
              {model && (
                <button
                  className="model-close-btn"
                  onClick={() => closeModel()}
                >
                  X
                </button>
              )}
              <div className="video-container" onClick={() => openModel()}>
                <Video
                  style={{ width: "100%" }}
                  autoPlay={model}
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
                >
                  <source src={item.videoUri} type="video/webm" />
                </Video>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoGallery;
