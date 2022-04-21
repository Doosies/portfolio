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
    // const myRef = useRef<HTMLDivElement>(null);
    // const [isClick, setIsClick] = useState(false);
    // const [startX, setStartX] = useState(0);
    // const [startY, setStartY] = useState(0);
    // const [fixedX, setFixedX] = useState(myRef.current?.getBoundingClientRect().left);
    // const [fixedY, setFixedY] = useState(myRef.current?.getBoundingClientRect().top)
    
    // console.log("render");
    // const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    //     setIsClick(true);
    //     setStartX(e.clientX);
    //     setStartY(e.clientY);
        
    // }
    // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    //     if (isClick) {
    //         // 마우스 좌표
    //         let x = e.clientX - startX;
    //         let y = e.clientY - startY;
            
    //         let refX = e.currentTarget.getBoundingClientRect().left;
    //         let refY = e.currentTarget.getBoundingClientRect().top;

    //         setFixedX(x+refX);
    //         setFixedY(y+refY);

    //         setStartX(e.clientX);
    //         setStartY(e.clientY);
    //     }
    // }
    // const handleMouseUp = () => {
    //     setIsClick(false);
    // }

    return (
        <Draggable>
            <WindowBlock 
                // ref = {myRef}
                // onMouseDown={handleMouseDown} 
                // onMouseMove={handleMouseMove}
                // onMouseUp={handleMouseUp}
                // // onMouseLeave={handleMouseUp}
                // style={{left: `${fixedX}px`, top: `${fixedY}px`}}
            >
                <WindowTopbar/>
                <WindowMainPage />
            </WindowBlock>
        </Draggable>
    );
}

export default Window;