import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitileCards/TitleCards';
import Footer from '../../components/Footer/Footer';
import women_who_empower from '../../assets/cards/women-who-empower.png';
import { useNavigate } from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data';

const Home = () => {
  const navigate = useNavigate();

  const featuredVideo = cards_data.find(card => card.id === 'featured') || cards_data[0]; 

  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={women_who_empower} alt="Featured" className='banner-img'/>
        <div className="hero-caption">
          <p>Listen to Anissa's 60-second pitch where she introduces herself and the vision behind her context-responsive software studio: DeepYaad</p>
          <div className="hero-btns">
            <button 
              className='btn' 
              onClick={() => navigate(`/player/${featuredVideo.id}`, { 
                state: { videoSrc: featuredVideo.videoSrc, name: featuredVideo.name } 
              })}
            >
              <img src={play_icon} alt="Play Icon" /> Play
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt="Info Icon" /> More Info
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;