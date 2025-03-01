import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Player.css'; 

const Player = () => {
  const location = useLocation();
  const { videoSrc } = location.state;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Now Playing</h1>
      {videoSrc ? (
        <div className="video-container">
          <div className="back-button" onClick={goBack}>
            &#8592;
          </div>

          <video className="video-player" controls autoplay>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <p>No video available.</p>
      )}
    </div>
  );
};

export default Player;