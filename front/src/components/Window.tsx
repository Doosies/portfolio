import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import WindowMainPage from './WindowMainPage';
import WindowTopbar from './WindowTopbar';
import Draggable from './Draggable';
import { ApplicationTypes } from '../enum/applicationTypes';
import { useAppDispatch, useAppSelector } from '../modules/hooks';
import { mouseDownWindow } from '../modules/window';

interface WindowProps {
    windowName: string;
    windowType: ApplicationTypes;
    windowId: number;
    position?: {x: number, y: number},
}

const WindowBlock = styled.div`
    background-color: #262628;
    position: absolute;

    /* transition: all 10s ease-in-out; */
    /* transform: scale(1.1); */
    /* transform-origin: 50% 50%; */


    @media screen and (max-width: 479px){
        height: 100%;
        width: 100%;
    }
    @media screen and (min-width: 480px) {
        height: 700px;
        width: 60%;

        bottom: 20%;
        border-radius: 20px;
    }   
`

const Window = ({
    windowName, windowType, windowId, position
}:WindowProps) => {
    // console.log("window reder id: " + windowId);
    // const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const dispatch = useAppDispatch();
    const window = useAppSelector(state => state.window.windowList.find( el => el.windowId === windowId));

    // const handleClickWindow = () => {
        
    // }

    const myRef = useRef<HTMLDivElement>(null);
    const [state,setState] = useState({
        isClick: false,
        startX: 0,
        startY: 0,
        fixedX: myRef.current?.getBoundingClientRect().left,
        fixedY: myRef.current?.getBoundingClientRect().top
    });
    
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        
        dispatch(mouseDownWindow(windowId));
        setState({
            ...state,
            isClick: true,
            startX: e.clientX,
            startY: e.clientY
        });
        // if (onMouseDown) onMouseDown();
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (state.isClick) {
            // 마우스 좌표 (마우스 움직인 거리) + (현재 element의 위치)
            let x = (e.clientX - state.startX) + (e.currentTarget.getBoundingClientRect().left);
            let y = (e.clientY - state.startY) + (e.currentTarget.getBoundingClientRect().top);

            setState({
                ...state,
                fixedX: x,
                fixedY: y,
                startX: e.clientX,
                startY: e.clientY,
            });
        }
    }
    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        setState({...state, isClick: false});
    }
    // }
    return (
        <WindowBlock 
            ref = {myRef}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown} 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            style={{left: `${state.fixedX}px`, top: `${state.fixedY}px`, zIndex: `${window?.zindex}`}}
        >
            <WindowTopbar 
                windowId={windowId}
                windowName={windowName}
            />
            <WindowMainPage />
        </WindowBlock>
    );
}

export default React.memo(Window);