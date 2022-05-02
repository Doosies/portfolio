import React, {useState} from 'react';
import styled from 'styled-components';
import BoardBottom from '../board/BoardBottom';
import BoardRow from '../board/BoardRow';
import BoardList from '../board/BoardList';

interface BoardMainPageProps {
    
}

const BoardMainPageBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */

    overflow-y: auto;

    padding: 10px;
`
const Top = styled.div`
    position: relative;
    width: 100%;
    height: 30px;
`;
const Content = styled.div`
    width: 100%;
    height: 100%;
    
`;
const SignInButton = styled.button`
    /* position: absolute; */
    position: absolute;
    right: 0;
`;


const BoardMainPage = () => {
    return (
        <BoardMainPageBlock>
            <Top>
                <SignInButton>로그인!</SignInButton>
            </Top>
            <Content>
                <BoardList />
            </Content>
        </BoardMainPageBlock>
    );
}

export default BoardMainPage;