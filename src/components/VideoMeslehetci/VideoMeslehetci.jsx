import React from "react";
import "./VideoMeslehetci.css";
import videoIcon from "../../assets/video_az.webp";
const VideoMeslehetci = () => {
  return (
    <div id="whatsap-video-modal-opener">
      <a href="#/">
        <img
          className="lazy"
          src={videoIcon}
          alt=""
          data-src="https://kontakt.az/wp-content/uploads/2021/05/video_az.png"
          style={{ width: "100%" }}
        />
      </a>
    </div>
  );
};

export default VideoMeslehetci;
