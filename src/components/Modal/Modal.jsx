import React from "react";
import './Modal.css'

const Modal = ({handleDelete,isOpen,handleClose,children}) => {
 

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            {children}
            <button onClick={handleClose}>Close</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
