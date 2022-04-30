import React, {useState} from 'react';
import reactDom from "react-dom";

const ModalPortal = ({children}:{children: React.ReactNode}) => {
  const el = document.getElementById("modal");
  // if (el)
    return reactDom.createPortal(children, el!);
}

export default ModalPortal;