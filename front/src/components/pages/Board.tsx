import React, {useState} from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../modules/hooks';
import BoardMainPage from './boardPages/BoardMainPage';

interface BoardProps {
    
}

const BoardBlock = styled.div`
    
`
const Board = () => {
    const router = useAppSelector(state => state.route.nowRoute);
    const a = '';
    switch (router) {
        case 'main' : return <BoardMainPage/>
        default: return <div>오류</div>
    }
}

export default Board;