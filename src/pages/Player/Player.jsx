import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Player.css';
import YouTube from "react-youtube";

const Player = () => {
  const location = useLocation();
  const { videoSrc } = location.state;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const opts = {
    height: '790',
    width: '1040',
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <h1>Now Playing</h1>
      {videoSrc ? (
        <div className="video-container">
          <div className="back-button" onClick={goBack}>
            &#8592;
          </div>
          <YouTube videoId={videoSrc} opts={opts} onReady={_onReady} id="video" />
        </div>
      ) : (
        <p>No video available.</p>
      )}
    </div>
  );
};

export default Player;