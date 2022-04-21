import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

interface DraggableProps {
    onMouseDown?: () => void;
    onMouseUp?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onClickMouse?: (e: React.MouseEvent<HTMLDivElement>) => void;
    children: React.ReactNode;
}

const DraggableBlock = styled.div`
    position: absolute;
`;

const Draggable = ({
    onMouseDown, onMouseUp, onClickMouse, children
}:DraggableProps) => {
    const myRef = useRef<HTMLDivElement>(null);
    const [state,setState] = useState({
        isClick: false,
        startX: 0,
        startY: 0,
        fixedX: myRef.current?.getBoundingClientRect().left,
        fixedY: myRef.current?.getBoundingClientRect().top
    });
    
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        
        setState({
            ...state,
            isClick: true,
            startX: e.clientX,
            startY: e.clientY
        });
        
        if (onMouseDown) onMouseDown();
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
        if (onMouseUp) onMouseUp(e);
    }


    return (
        <DraggableBlock
            ref = {myRef}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown} 
            onMouseMove={handleMouseMove}
            // style={{left: `${state.fixedX}px`, top: `${state.fixedY}px`, zIndex: `${zindex}`}}
        >
            {children}      
        </DraggableBlock>
    );
}

export default React.memo(Draggable);