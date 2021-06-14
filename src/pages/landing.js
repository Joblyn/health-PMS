import React from "react";
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
export default function Landing() {
  return (
  <>
    <header className="header d-flex align-items-center py-2 px-3">
      <a href="/">
        <img
          className="logo"
          src="/images/logo-1200.png"
          width="300px"
          height="auto"
          alt="logo"
        />
      </a>
    </header>
    <main 
        class="main-section"
      style={{
        backgroundColor: '#e2ecf3',
        minHeight: '85vh'
      }}>
          <div className="parent-container d-flex justify-content-center align-items-cente">
            <div className="d-flex align-items-center text-center">
              <div>
                <PersonOutlineTwoToneIcon style={{fontSize: '200px'}}/>
                <p>Dietician</p>
              </div>
              <div>
                <PersonOutlineTwoToneIcon style={{fontSize: '200px'}}/>
                <p>Patient</p>
              </div>
            </div>
          </div>
      </main>
  </>
  );
};
