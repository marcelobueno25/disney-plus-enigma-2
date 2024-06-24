import React from "react";
import disneyAppLogo from "../../assets/videos/loader-video.mp4";
import "./styles.scss";

const PreLoader = () => {
  return (
    <section className="preLoader">
      <div className="preContainer">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={disneyAppLogo}
          type="video/mp4"
        />
      </div>
    </section>
  );
};

export default PreLoader;
