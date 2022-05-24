import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Button from './components/Button';
import ToggleSwitch from './components/ToggleSwitch';
import {ThemeContext, themes} from './context/themeContext';

function App() {

  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    const toggleTheme = () => {
      setTheme((previousThemeValue) => 
        previousThemeValue === themes.dark ? themes.light : themes.dark
      );
    };
  }
  
  return (
    
    <ThemeContext.Provider value={{ theme: themes.dark }}>
      <div className="App">
      <Navbar/>
        <div className="main-container">
          <Card style={{ justifyContent: 'space-between' }}>
            Here's a card with stuff
            <Button label="Click me" onClick={() => {}} />
          </Card>
        </div>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
