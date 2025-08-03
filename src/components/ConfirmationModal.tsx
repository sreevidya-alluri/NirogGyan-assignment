import React from "react";

interface Props {
  show: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const ConfirmationModal: React.FC<Props> = ({ show, title, message, onClose }) => {
  if (!show) return null;
  return (
    <div className="modal d-block" tabIndex={-1} role="dialog" onClick={onClose}>
      <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
