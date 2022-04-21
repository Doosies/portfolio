import React, {useEffect, useRef, useState} from 'react';
import styled, { css, keyframes } from 'styled-components';
import { IconType } from 'react-icons/lib';
import useRect from '../hooks/useRect';
// import { WindowRefType } from './MainPage';

interface ClickableObjectProps {
    objectName: string;
    ObjectIcon: IconType;
    // refs: React.MutableRefObject<{}>;
}

const ClickableObjectBlock = styled.div`

    margin: 20px;
    /* padding: 5px; */

    background-color: transparent;
    color: white;
    border: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all ease-in-out 300ms;

    .Icon {
        font-size: 90px;
    }
    p {
        margin: 0;
        padding: 0px 5px;
        user-select: none;
    }


    &:hover {
        transform: scale(1.15);
        .Icon {
            border: 0.1px solid white;
        }
        p {
            background-color: #0059D0;
        }
    }
`

const Application = ({
    objectName, 
    ObjectIcon, 
    // refs,
}:ClickableObjectProps) => {
    // 현재 객체의 ref
    // const myRef = useRef<HTMLDivElement>(null);
    // const rect = useRect(myRef);

    // 힌번 클릭 했을 때
    const handleClick = () => {
        console.log("Click!!");
        // console.log(refs);
    }

    return (
        <ClickableObjectBlock 
            // ref={el => refs.current = {...refs.current, [objectName]:el}}
            onClick={handleClick}
        >
            <ObjectIcon className='Icon'/>
            <p>{objectName}</p>
        </ClickableObjectBlock>
    );
}

export default Application;