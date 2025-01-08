import React from "react";
import "./Popup.css";

const CustomPopup = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Don't render if the popup is not open

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h3>{title}</h3>
          <button className="popup-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-body">{children}</div>
        <div className="popup-footer">
          <button className="popup-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;
