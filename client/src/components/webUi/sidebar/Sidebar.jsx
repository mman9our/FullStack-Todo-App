import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <aside>
      <button id="close-btn">
        <span className="material-symbols-sharp">close</span>
      </button>
      <div className="sidebar">
        <a className="active" href="#">
          <span className="material-symbols-sharp">Home</span>
          <h4>Home</h4>
        </a>
        <a href="#">
          <span className="material-symbols-sharp">star</span>                                
          <h4>Important</h4>
        </a>
        <a href="#">
          <span className="material-symbols-sharp">date_range</span>
          <h4>Planned</h4>
        </a>
        <a href="#">
          <span className="material-symbols-sharp">person</span>
          <h4>Assigned to me</h4>
        </a>
        <a href="#">
          <span className="material-symbols-sharp">leaderboard</span>
          <h4>Statistics</h4>
        </a>
        <a href="#">
          <span className="material-symbols-sharp">Settings</span>
          <h4>Settings</h4>
        </a>
      </div>

      <div className="updates">
        <div className="social-link">
          <span className="material-symbols-sharp">update</span>
          <a href="https://github.com/mman9our/Todo-App-React" target="_blank" aria-label="Github">
            <i className='github-img bx bxl-github'></i>
          </a>
        </div>
        <h4>Updates Avilable</h4>
        <p>FullStack Todo List </p>
        <p>Typed Todo List </p>
        <a className="btn-update" href="#">Update Now</a>
      </div>
    </aside>
  );
}

export default Sidebar;
