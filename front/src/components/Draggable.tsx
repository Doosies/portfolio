import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

interface DraggableProps {
    children: React.ReactNode;
}

const DraggableBlock = styled.div`
    position: absolute;
`;

const Draggable = ({
    children
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
    const handleMouseUp = () => {
        setState({...state, isClick: false});
    }


    return (
        <DraggableBlock
            ref = {myRef}
            onMouseDown={handleMouseDown} 
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{left: `${state.fixedX}px`, top: `${state.fixedY}px`}}
            
        >
            {children}      
        </DraggableBlock>
    );
}

export default Draggable;