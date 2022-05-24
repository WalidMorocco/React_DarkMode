import React, {useState} from 'react'
import ToggleSwitch from './ToggleSwitch';
import {ThemeContext, themes} from '../context/themeContext';

const Navbar = () => {

  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {

    

    const toggleTheme = () => {
      setTheme((previousThemeValue) => 
        previousThemeValue === themes.dark ? themes.light : themes.dark
      );
    };
  }
  
  return (
    <nav>
      <header className="header">
          <div className="header-content">
            <h2>Dark Mode Exercise</h2>
            <ToggleSwitch onToggle={toggleTheme} />
          </div>
        </header>
    </nav>
  )
};

export default Navbar;