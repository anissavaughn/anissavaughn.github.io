import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Viewer.css';

const Viewer = () => {
  const navigate = useNavigate();

  const selectViewer = (role, imgSrc) => {
    localStorage.setItem('selectedUser', JSON.stringify({ role, profileImg: imgSrc }));
    navigate('/');
  };

  return (
    <div>
      <header className="header">
        <div className="logo" onClick={() => navigate('/')}>datæmpress</div>
      </header>

      <section className="viewer-selection">
        <h1>Who’s viewing?</h1>
        <div className="viewer-grid">
          <div className="viewer-card" onClick={() => selectViewer('Talent Scout', '/users/scout.png')}>
            <img src="/users/scout.png" alt="Talent Scouts" />
            <h3>Talent Scout</h3>
          </div>
          <div className="viewer-card" onClick={() => selectViewer('Patron', '/users/patron.png')}>
            <img src="/users/patron.png" alt="Patrons" />
            <h3>Patron</h3>
          </div>
          <div className="viewer-card" onClick={() => selectViewer('Mentor', '/users/mentor.png')}>
            <img src="/users/mentor.png" alt="Mentors" />
            <h3>Mentor</h3>
          </div>
          <div className="viewer-card" onClick={() => selectViewer('Collaborator', '/users/collab.png')}>
            <img src="/users/collab.png" alt="Collaborators" />
            <h3>Collaborator</h3>
          </div>
          <div className="viewer-card" onClick={() => selectViewer('Mentee', '/users/mentee.png')}>
            <img src="/users/mentee.png" alt="Mentee" />
            <h3>Mentee</h3>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="copyright-text">© 2025 Anissa Vaughn. Inspired by Netflix. Not affiliated with or endorsed by Netflix [yet].</p>
      </footer>
    </div>
  );
};

export default Viewer;