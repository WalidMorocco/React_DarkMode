import React, {useContext} from 'react';
import { ThemeContext } from '../context/themeContext';

const Card = ({ children, style }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="card" style={(style, { backgroundColor: theme.background, color: theme.foreground })}>
      <div
       className="card-container"
       
       >
        {children}
      </div>
    </div>
  );
};

export default Card;
