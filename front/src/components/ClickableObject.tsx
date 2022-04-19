import React, {useEffect, useRef, useState} from 'react';
import styled, { css, keyframes } from 'styled-components';
import { IconType } from 'react-icons/lib';

interface ClickableObjectProps {
    objectName: string;
    ObjectIcon: IconType;
}

const ClickableObjectBlock = styled.div<{isClick: boolean}>`

    margin: 20px;
    /* padding: 5px; */

    background-color: transparent;
    color: white;
    border: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all ease-in-out 200ms;

    .Icon {
        /* width: 136px; */
        /* height: 136px; */
        font-size: 90px;
    }
    p {
        margin: 0;
        padding: 0px 5px;
    }


    &:hover {
        transform: scale(1.3);
        .Icon {
            border: 0.1px solid white;
        }
        p {
            background-color: #1569ef;
        }
    }
`

const ClickableObject = ({
    objectName, 
    ObjectIcon, 
    // objectSize
}:ClickableObjectProps) => {
    const [isClick, setClick] = useState(false);
    // const myRef = useRef<HTMLDivElement>(null);

    // 힌번 클릭 했을 때
    const handleClick = () => {
        console.log("Click!!"+objectName);
        setClick(true);
    }
    // // 두번 클릭 했을 때
    // const handleDoubleClick = () => {
    //     console.log("doubleClick!!"+objectName);
    //     setClick(false);

    // }
    // // 현재 클릭된것 이외의 것을 클릭 했을 때
    // useEffect(() => {
    //     const handleClickOutside = (e: MouseEvent) => {
    //         if (myRef.current && !myRef.current.contains(e.target as Node)) {
    //             setClick(false);
    //         }
    //     }
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown',handleClickOutside);
    //     }
    // },[myRef]);
    

    return (
        <ClickableObjectBlock 
            // ref={myRef}
            isClick = {isClick}
            onClick={handleClick}
            // onDoubleClick={handleDoubleClick}
        >
            <ObjectIcon className='Icon'/>
            <p>{objectName}</p>
        </ClickableObjectBlock>
    );
}

export default ClickableObject;