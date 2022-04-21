import React from 'react';
import styled from 'styled-components';
import WindowMainPage from './WindowMainPage';
import WindowTopbar from './WindowTopbar';
import Draggable from './Draggable';
import { ApplicationTypes } from '../enum/applicationTypes';

interface WindowProps {
    windowName: string;
    windowType: ApplicationTypes;
    position?: {x: number, y: number},
}

const WindowBlock = styled.div`
    background-color: #262628;
    position: relative;

    @media screen and (max-width: 479px){
        height: 100%;
        width: 100%;
    }
    @media screen and (min-width: 480px) {
        height: 700px;
        width: 500px;

        bottom: 20%;
        border-radius: 20px;
    }
`

const Window = ({
    windowName, windowType, position
}:WindowProps) => {

    return (
        <Draggable>
            <WindowBlock >
                <WindowTopbar/>
                <WindowMainPage />
            </WindowBlock>
        </Draggable>
    );
}

export default Window;