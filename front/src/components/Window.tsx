import React, {useState} from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import WindowMainPage from './WindowMainPage';
import WindowTopbar from './WindowTopbar';

interface WindowProps {
    
}

const WindowBlock = styled.div`
    position: absolute;
    width: 80%;
    height: 70%;
    background-color: #262628;

    border-radius: 20px;

    position: absolute;
    bottom: 20%;
`
const Window = () => {
    return (
        <Draggable>
            <WindowBlock>
                    <WindowTopbar />
                    <WindowMainPage />
            </WindowBlock>
        </Draggable>
    );
}

export default Window;