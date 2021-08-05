import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
          {children}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const ModalOverlay = styled.div`
  width: 100%;
   height: 100%;

   background-color: rgba(0, 0, 0, 0.06);
   backdrop-filter: blur(2px);

   position: fixed;
   top: 0;

   display: flex;
   align-items: center;
   justify-content: center;
`

const ModalContainer = styled.div`
   background-color: ${({theme}) => theme.colors.primary};
   border-radius: 6px;

   transition: box-shadow 0.2s;
`

const ModalContent = styled.div`
  width: 500px;
  height: 100%;
  padding: 50px;
`
// .modal-overlay {
//   width: 100%;
//   height: 100%;

//   background-color: rgba(0, 0, 0, 0.06);
//   backdrop-filter: blur(4px);

//   position: fixed;
//   top: 0;

//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .modal {
//   background-color: #ffffff;
//   border-radius: 6px;

//   transition: box-shadow 0.2s;
// }

// .modal:hover {
//   box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
// }

// .modal-content {
//   width: 500px;
//   height: 100%;
//   padding: 50px;
// }

// https://devrecipes.net/modal-component-with-next-js/

export default Modal;