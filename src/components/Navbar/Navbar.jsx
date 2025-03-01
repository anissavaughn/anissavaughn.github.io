import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import caret_icon from '../../assets/caret_icon.svg';

const Navbar = () => {
  const [profileImg, setProfileImg] = useState(null);
  const navRef = useRef();
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Retrieve selected user from localStorage
    const storedUser = localStorage.getItem('selectedUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setProfileImg(userData.profileImg);
    }

    // Navbar color change on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

  const handleSwitchUser = () => {
    localStorage.removeItem('selectedUser'); // Clear stored user
    navigate('/viewer'); // Navigate to the Viewer page
  };

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>DeepYaad</li>
          <li>Research</li>
          <li>Projects</li>
          <li>Oratory</li>
          <li>Awards</li>
          <li>Leadership</li>
          <li>Community</li>
          <li>Hobbies</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className='icons' />
        <img src={bell_icon} alt="Notifications" className='icons' />
        <div className="navbar-profile">
          <img src={profileImg || '/assets/default-profile.png'} alt="Profile" className='profile' />
          <img src={caret_icon} alt="Dropdown" />
          <div className="dropdown">
            <p onClick={handleSwitchUser}>Switch User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

