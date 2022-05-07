import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { BoardInfos } from './BoardList';

interface BoardRowProps {
    onClick?: (boardInfos: BoardInfos, isTop?: boolean) => void;
    boardInfos: BoardInfos,
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
    boardInfos, isTop, onClick
}:BoardRowProps) => {
    return (
        <BoardRowBlock isTop={isTop} onClick={()=>{onClick && onClick(boardInfos, isTop)}}>
            <Column isTop={isTop} >
                <Text className='title' >
                    {boardInfos.title}    
                </Text>
            </Column>
            <Column isTop={isTop} >
                <Text>
                    {boardInfos.writter} 
                </Text>
            </Column>
        </BoardRowBlock>
    );
}

export default BoardRow;