import React from "react";
import './Modal.css'

const EditModal = ({isOpenEdit,handleClose,children}) => {
 

  return (
    <div>
      {isOpenEdit && (
        <div className="modal-overlay">
          <div className="modal">
            {children}
            <button onClick={handleClose}>Close</button>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default EditModal;
