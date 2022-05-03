import React, {useState} from 'react';
import styled from 'styled-components';
import BoardBottom from '../board/BoardBottom';
import BoardRow from '../board/BoardRow';
import BoardList from '../board/BoardList';
import { useAppDispatch, useAppSelector } from '../../../modules/hooks';
import { changeRoute, RoutePages } from '../../../modules/route';
import Button from '../../Button';

interface BoardMainPageProps {
    windowId: number;
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
    display: flex;
    justify-content: flex-end;
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


const BoardMainPage = ({
    windowId
}:BoardMainPageProps) => {
    const nowRoute = useAppSelector(state => state.route.find( el => el.windowId === windowId)?.nowRoute);
    const dispatch = useAppDispatch();

    const handleClickSignIn = () => {
        dispatch(changeRoute({route: RoutePages.SignIn, windowId}));
    }
    return (
        <BoardMainPageBlock>
            <Top>
                <Button width ={'100px'} onClick={handleClickSignIn}>
                    로그인!
                </Button>
            </Top>
            <Content>
                <BoardList windowId={windowId}/>
            </Content>
        </BoardMainPageBlock>
    );
}

export default BoardMainPage;