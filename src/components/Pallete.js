import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import theme from '../styles/theme';

const Palette = () => {
  const { theme: selectedTheme, changeTheme } = useContext(ThemeContext);
  const themeStyles = theme[selectedTheme];

  const colors = ['#BD2126', '#FFB6C1'];

  const handleColorClick = (color) => {
    // Update the theme when a color is clicked
    changeTheme(color);
  };

  return (
    <div className="flex space-x-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-5 h-5 cursor-pointer rounded-full ${themeStyles.borderColor} border-2`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
          onChange={(e) => handleColorClick(e.target.value)}
        ></div>
      ))}
    </div>
  );
};

export default Palette;
