import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import WindowMainPage from './WindowMainPage';
import WindowTopbar from './WindowTopbar';
import useRect from '../hooks/useRect'
import { RecordWithTtl } from 'dns';
import useMouse from '../hooks/useMouse';
import Draggable from './Draggable';

interface WindowProps {
    
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

const Window = () => {

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