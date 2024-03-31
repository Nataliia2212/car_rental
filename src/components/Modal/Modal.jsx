import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal');

const Modal = ({ children, closeModal }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return ReactDOM.createPortal(
    <div className={s.modalWrapper} onClick={handleBackdropClick}>
      <div className={s.modalContent}>
        <h1>Modal</h1>

        <button className={s.closeButton} onClick={closeModal}>
          ×
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
