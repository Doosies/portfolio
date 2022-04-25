import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

interface DraggableProps {
    onMouseDown?: () => void;
    onMouseUp?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onClickMouse?: (e: React.MouseEvent<HTMLDivElement>) => void;
    zIndex?: number;
    children: React.ReactNode;
    style?:React.CSSProperties;
}

const DraggableBlock = styled.div`
    position: absolute;
    /* overflow: hidden; */
    /* width:100%; */
    /* height:100%; */
`;

const Draggable = ({
    onMouseDown, onMouseUp, onClickMouse, children, zIndex, style
}:DraggableProps) => {
    const windowRef = useRef<HTMLDivElement>(null);
    const [state,setState] = useState({
        isClick: false,
        startX: 0,
        startY: 0,
        left: windowRef.current?.getBoundingClientRect().left,
        top: windowRef.current?.getBoundingClientRect().top,
    });

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (onMouseDown) onMouseDown();
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
            
            // console.log(componentY);
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
        <DraggableBlock
            ref = {windowRef}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown} 
            onMouseMove={handleMouseMove}
            // style={{left: `${state.fixedX}px`, top: `${state.fixedY}px`, zIndex: `${zindex}`}}
            style={{...style, left: `${state.left}px`, top: `${state.top}px`, zIndex: `${zIndex}`}}
        >
            {children}      
        </DraggableBlock>
    );
}

export default React.memo(Draggable);