import React, {useContext} from 'react';
import { ThemeContext } from '../context/themeContext';

const Card = ({ children, style }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="card">
      <div
       className="card-container"
       style={(style, { backgroundColor: theme.background })}
       >
        {children}
      </div>
    </div>
  );
};

export default Card;
