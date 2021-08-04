import React from "react";
import "./LanguagePicker.scss";
export const LanguagePicker = (props) => {
  return (
    <div className={`language__box ${props.className}`}>
      <i className={`fas fa-globe icon1 ${props.iconClass}`}></i>
      <i className={`fas fa-caret-down icon2 ${props.iconClass}`}></i>
      <select className={`language__box--picker ${props.selectClass}`}>
        <p></p>
        <option value="" selected>
          English
        </option>
      </select>
    </div>
  );
};
export default LanguagePicker;
