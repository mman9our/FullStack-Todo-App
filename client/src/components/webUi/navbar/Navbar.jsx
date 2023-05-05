import React from 'react';
import './Navbar.css'
import LOGO from '../../../assets/images/logo.png';
import MAN from '../../../assets/images/beard-man.png';

function Navbar() {

  return (
    <nav>
      <div className="container">
        <a href="#">
          <img src={LOGO} className="logo" alt="Logo photo" />
        </a>
        <div className="profile-area">
          <div className="theme-btn">
            <span className="material-symbols-sharp active">light_mode</span>
            <span className="material-symbols-sharp">dark_mode</span>
          </div>
          <div className="profile">
            <div className="profile-photo">
              <img src={MAN} alt="Person Photo" />
            </div>
            <h4 id="userName">Mohamed</h4>
            <span className="material-symbols-sharp">expand_more</span>
          </div>
          <button id="menu-btn">
            <span className="material-symbols-sharp">menu</span>                        
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
