import React, {useState} from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons/lib';

interface ClickableObjectProps {
    objectName: string;
    ObjectIcon: IconType;
}

const ClickableObjectBlock = styled.button`
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
        padding: 0;
    }
`

const ClickableObject = ({
    objectName, 
    ObjectIcon, 
    // objectSize
}:ClickableObjectProps) => {
    return (
        <ClickableObjectBlock>
            <ObjectIcon className='Icon'/>
            <p>{objectName}</p>
        </ClickableObjectBlock>
    );
}

export default ClickableObject;