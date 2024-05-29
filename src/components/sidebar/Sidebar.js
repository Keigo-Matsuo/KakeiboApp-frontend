// import React from 'react';
// import { SidebarData } from './SidebarData';
// import './Sidebar.css';

// function Sidebar() {
//   return (
//     <div className='Sidebar'>
//       <ul className='SidebarList'>
//         {SidebarData.map((value, key) => {
//           return (
//             <li
//               key={key}
//               id={window.location.pathname == value.link ? "active" : ""}
//               className='row'
//               onClick={() => {
//                 window.location.pathname = value.link;
//             }}>
//               <div id="title">{value.title}</div>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// export default Sidebar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

function Sidebar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const {user, logout} = useAuth();

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SidebarData.map((value, key) => {
          return (
            <li key={key} id={window.location.pathname == value.link ? "active" : ""}>
              <div
                className={`row ${value.subMenu && value.subMenu.length > 0 && isSettingsOpen ? 'active' : ''}`}
                  onClick={() => {
                      if (value.subMenu && value.subMenu.length > 0) {
                          toggleSettings();
                      } else {
                          window.location.pathname = value.link;
                      }
                  }}
              >
              
                <div id="title">{value.title}</div>

              </div>

              {value.subMenu && value.subMenu.length > 0 && isSettingsOpen && (
                <ul>
                  {value.subMenu.map((subValue, subKey) => (
                    <li key={subKey} className={`row ${value.subMenu && value.subMenu.length > 0 && isSettingsOpen ? 'active' : ''}`}>
                      <Link to={subValue.link} id="sub-title">{subValue.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
        <li>
          <p id="title" className='row' onClick={logout}>ログアウト</p>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
