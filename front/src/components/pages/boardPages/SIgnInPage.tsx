import React, {useState} from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../modules/hooks';
import { changeRoute, RoutePages } from '../../../modules/route';
import Button from '../../Button';

interface SIgnInPageProps {
    
    windowId: number;
}

const SIgnInPageBlock = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
const Title = styled.div`
    width: 200px;
    padding-bottom: 5px;
    font-size: 20px;
    border-bottom: 0.1px solid white;
    text-align: center;
`;
const Input = styled.input`
    width: 200px;
    height: 30px;
    line-height: 30px;
`;

const BottomButtonContainer = styled.div`
    width: 200px;
    padding: 10px;
    border-top: 0.1px solid white;
    display: flex;
    justify-content: center;
    gap: 5px;
`;

const SIgnInPage = ({
    windowId
}:SIgnInPageProps) => {
    const dispatch = useAppDispatch();

    const handleClickSignUp = () => {
        dispatch(changeRoute({route:RoutePages.SignUp, windowId}));
    }
    return (
        <SIgnInPageBlock>
            <Title>로그인</Title>
            <Input placeholder='아이디'/>
            <Input placeholder='비밀번호'/>
            <BottomButtonContainer>
                <Button>로그인</Button>
                <Button onClick={handleClickSignUp}>
                    회원가입
                </Button>
            </BottomButtonContainer>
        </SIgnInPageBlock>
    );
}

export default SIgnInPage;