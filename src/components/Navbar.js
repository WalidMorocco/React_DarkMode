import React, {useContext} from 'react';
import ToggleSwitch from './ToggleSwitch';
import {ThemeContext, themes} from '../context/themeContext';

const Navbar = () => {

  const { theme } = useContext(ThemeContext);
  
  return (
      <nav >
        <header className="header" style={{background: theme.background, color:theme.foreground}}>
            <div className="header-content"  >
              <h2>Dark Mode Exercise</h2>
            </div>
          </header>
      </nav>
 
  )
};

export default Navbar;