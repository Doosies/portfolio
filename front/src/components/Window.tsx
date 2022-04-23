import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import WindowMainPage from './WindowMainPage';
import WindowTopbar from './WindowTopbar';
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
    border-radius: 20px;
    box-shadow: -5px 5px 20px -10px black;

    @media screen and (max-width: 1023px){
        height: 80%;
        width: 90%;
    }
    @media screen and (min-width: 1024px) {
        height: 80%;
        width: 800px;
    }   
`

const Window = ({
    windowName, windowType, windowId, position
}:WindowProps) => {
    const dispatch = useAppDispatch();
    const window = useAppSelector(state => state.window.windowList.find( el => el.windowId === windowId));

    const myRef = useRef<HTMLDivElement>(null);
    const [state,setState] = useState({
        isClick: false,
        startX: 0,
        startY: 0,
        left: myRef.current?.getBoundingClientRect().left,
        top: myRef.current?.getBoundingClientRect().top
    });
    
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        
        dispatch(mouseDownWindow(windowId));

        setState({
            ...state,
            isClick: true,
            startX: e.clientX,
            startY: e.clientY
        });
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (state.isClick) {
            const el = e.currentTarget;

            // 현재 객체의 left, top 값 (마우스 움직인 거리) + (현재 element의 위치)
            let left = (e.clientX - state.startX) + (e.currentTarget.getBoundingClientRect().left);
            let top = (e.clientY - state.startY) + (e.currentTarget.getBoundingClientRect().top);

            // 부모 엘레멘트
            const parent = e.currentTarget.parentElement;
            // 현재 객체의 실제 x, y 좌표
            const componentX = el.getBoundingClientRect().x;
            const componentY = el.getBoundingClientRect().y;
            
            console.log(componentY);
            if (parent) {
                // // 오른쪽을 벗어나면
                // if (componentX + el.clientWidth > parent.clientWidth -10) {
                //     left = parent.clientWidth - el.clientWidth -10;
                // // 왼쪽을 벗어나면
                // }else if (componentX < 10) {
                //     left = 10.1;
                // // 아래쪽을 벗어나면
                // }else if (componentY + el.clientHeight > parent.parentElement!.clientHeight -10) {
                //     top = parent.parentElement!.clientHeight - el.clientHeight - 10;
                // // 윗쪽을 벗어나면
                if (componentY < 50) {
                    top = 50;
                }
            }
            setState({
                ...state,
                left,
                top,
                startX: e.clientX,
                startY: e.clientY,
            })
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
            style={{left: `${state.left}px`, top: `${state.top}px`, zIndex: `${window?.zindex}`}}
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