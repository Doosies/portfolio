import React, {useState} from 'react';
import styled from 'styled-components';
import ModalPortal from './Portal';

interface ModalProps {
    onClose: () => void;
}

const ModalBlock = styled.div`
    
`
const Background = styled.div`
position: absolute;
/* top: - */
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 10000;
    /* overflow: auto; */
`;

const Content = styled.div`
/* overflow-y: hidden; */
overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: scroll;
  background: #1F1D1E;
  z-index: 10001;
`;
const Modal = ({
    onClose,
}:ModalProps) => {
    return  (
        <ModalPortal>
          <Background>
            <Content>

             </ Content>
          </Background>
        </ModalPortal>
    );
}

export default Modal;