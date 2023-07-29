import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import moment from 'moment/moment';

function ToastMessage({ show, header = '', message = '', type = '', onClose }) {
  if (show) {
    return (
      <ToastContainer
        className="p-3"
        style={{ zIndex: 1 }}
        position="top-center"
      >
        <Toast show bg={type} autohide={true} onClose={onClose}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{header}</strong>
            <small className="text-muted">{moment().format('hh:mm A')}</small>
          </Toast.Header>
          <Toast.Body className="text-white">{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    );
  }
  return null;
}

export default ToastMessage;