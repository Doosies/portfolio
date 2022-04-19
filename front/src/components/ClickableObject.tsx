import React, {useEffect, useRef, useState} from 'react';
import styled, { css } from 'styled-components';
import { IconType } from 'react-icons/lib';

interface ClickableObjectProps {
    objectName: string;
    ObjectIcon: IconType;
}

const ClickableObjectBlock = styled.button<{isClick: boolean}>`
    width: 110px;
    height: 110px;
    padding: 15px;

    background-color: black;
    color: white;
    border: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    .Icon {
        font-size: 80px;
    }
    p {
        margin: 0;
        padding: 0px 5px;
    }

    /* border: 0; */
    ${({isClick}) => isClick && css`
        border: 0.1px solid white;
        p {
            background-color: #1569ef;
            /* color: #49a1ff; */
        }
    `}
`

const ClickableObject = ({
    objectName, 
    ObjectIcon, 
    // objectSize
}:ClickableObjectProps) => {
    const [isClick, setClick] = useState(false);
    const myRef = useRef<HTMLButtonElement>(null);

    // 힌번 클릭 했을 때
    const handleClick = () => {
        console.log("Click!!"+objectName);
        setClick(true);
    }
    // 두번 클릭 했을 때
    const handleDoubleClick = () => {
        console.log("doubleClick!!"+objectName);
        setClick(false);

    }
    // 현재 클릭된것 이외의 것을 클릭 했을 때
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (myRef.current && !myRef.current.contains(e.target as Node)) {
                setClick(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown',handleClickOutside);
        }
    },[myRef]);
    

    return (
        <ClickableObjectBlock 
            ref={myRef}
            isClick = {isClick}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
        >
            <ObjectIcon className='Icon'/>
            <p>{objectName}</p>
        </ClickableObjectBlock>
    );
}

export default ClickableObject;