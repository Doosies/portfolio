import React, { useEffect } from 'react';
import styled from 'styled-components';
import BoardList from '../board/BoardList';
import { useAppDispatch, useAppSelector } from '../../../modules/hooks';
import { changeRoute, RoutePages } from '../../../modules/route';
import Button from '../../Button';
import { logoutUser } from '../../../modules/auth';
import { getBoardLists } from '../../../modules/board';
// import { logout } from '../../../modules/auth';
interface BoardMainPageProps {
    windowId: number;
}

const BoardMainPageBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;

    overflow-y: auto;

    padding: 10px;
`
const Top = styled.div`
    position: relative;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
`;
const Content = styled.div`
    width: 100%;
    height: 100%;
    
`;


const BoardMainPage = ({
    windowId
}:BoardMainPageProps) => {
    const auth = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getBoardLists());
    },[])

    const handleClickSignIn = () => {
        if (auth.logged) dispatch(logoutUser());
        else dispatch(changeRoute({route: RoutePages.SignIn, windowId}));
    }
    return (
        <BoardMainPageBlock>
            <Top>
                <Button width ={'100px'} onClick={handleClickSignIn}>
                    {auth.logged ? '로그아웃' : '로그인'}
                </Button>
            </Top>
            <Content>
                <BoardList windowId={windowId}/>
            </Content>
        </BoardMainPageBlock>
    );
}

export default BoardMainPage;