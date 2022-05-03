import React, {useEffect, useState} from 'react';
import { FiEdit } from 'react-icons/fi';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../modules/hooks';
import { addRouteWindow, RoutePages } from '../../modules/route';
import BoardContentsPage from './boardPages/BoardContentsPage';
import BoardEditPage from './boardPages/BoardEditPage';
import BoardMainPage from './boardPages/BoardMainPage';
import SIgnInPage from './boardPages/SIgnInPage';
import SignUpPage from './boardPages/SignUpPage';

interface BoardProps {
    windowId: number;
}

const BoardBlock = styled.div`
    
`
const Board = ({
    windowId, 
}:BoardProps) => {
    const routePage = useAppSelector(state => state.route.find( el => el.windowId === windowId)?.nowRoute);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(addRouteWindow({route: RoutePages.Main, windowId }));
        console.log("board 생성");
    },[]);
    
    switch (routePage) {
        case RoutePages.Main : return <BoardMainPage windowId ={windowId}/>
        case RoutePages.SignIn : return <SIgnInPage windowId ={windowId}/>
        case RoutePages.SignUp : return <SignUpPage windowId ={windowId}/>
        case RoutePages.Edit : return <BoardEditPage windowId ={windowId}/>
        case RoutePages.Contents : return <BoardContentsPage windowId ={windowId}/>
        default: {
            
            return <div>
                <p>오류페이지입니다.</p>
                <p>window id: {windowId}</p>
                <p>route page: : {routePage}</p>
            </div>
        }
    }
}

export default Board;