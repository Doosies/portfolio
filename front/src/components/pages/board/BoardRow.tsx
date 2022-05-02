import React, {useState} from 'react';
import styled, { css } from 'styled-components';

interface BoardRowProps {
    title: string;
    nickname: string;
    isTop?:boolean;
}

const BoardRowBlock = styled.div<{isTop?: boolean}>`
    position: relative;
    width: 100%;
    

    display: flex;
    text-align: left;
    
    &:hover {
        background-color: ${({isTop})=> !isTop && '#2A2A2A'}
    }
    
    .title {
        cursor: ${({isTop})=> !isTop && 'pointer'};
    }
`

const Column = styled.div<{isTop?: boolean}>`
    width: 100%;
    padding: 5px;
    padding-left: 30px;
    border-bottom: 0.1px solid #404040;
    

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:nth-child(1) {        
        width: 100%;
        /* background-color: pink; */
    }
    &:nth-child(2) {   
        width: 200px;
        justify-content: center;
    }

    display: flex;
    ${({isTop})=> isTop && css `
        justify-content: center;
        font-weight: bold;
        border-top: 0.1px solid #404040;
    `}
`;
const Text = styled.div<{isTop?: boolean}>`
    /* width: 100%; */
    
`;

const BoardRow = ({
    title, nickname, isTop, 
}:BoardRowProps) => {
    return (
        <BoardRowBlock isTop={isTop}>
            <Column isTop={isTop} >
                <Text className='title' >
                    {title}    
                </Text>
            </Column>
            <Column isTop={isTop} >
                <Text>
                    {nickname} 
                </Text>
            </Column>
        </BoardRowBlock>
    );
}

export default BoardRow;