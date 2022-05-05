
import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import { signIn } from '../../../api/Api';
import { login } from '../../../modules/auth';
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
    /* display: flex; */
    justify-content: center;
    gap: 5px;
`;
const BottomButtonTop = styled.div`
    width: 100%;
    display: flex;
`;
const ButtomButtonButtom = styled.div`
    width: 100%;
`;

const SIgnInPage = ({
    windowId
}:SIgnInPageProps) => {
    const [input, setInput] = useState({
        id: '',
        pw: '',
    })

    const dispatch = useAppDispatch();

    const handleClickSignIn = async() => {
        const res = await signIn({userId: input.id, userPw: input.pw});
        const id = res.data.message;
        if (res.status === 200) {
            alert("로그인 완료! 메인화면으로 돌아갑니다.");
            dispatch(login({id, token: res.data.data}));
            dispatch(changeRoute({route: RoutePages.Main, windowId}));
        }else {
            alert("로그인 실패! 아이디, 비밀번호를 확인해주세요");
        }
    }
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.id]:e.target.value
        });
    }
    const handleClickSignUp = () => {
        dispatch(changeRoute({route:RoutePages.SignUp, windowId}));
    }
    const handleClickGoHome = () => {
        dispatch(changeRoute({route:RoutePages.Main, windowId}));
    }
    return (
        <SIgnInPageBlock>
            <Title>로그인</Title>
            <Input id="id" onChange={handleInputChange} value={input.id} placeholder='아이디'/>
            <Input id="pw" onChange={handleInputChange} value={input.pw} placeholder='비밀번호'/>
            <BottomButtonContainer>
                <BottomButtonTop>
                    <Button onClick={handleClickSignIn}>
                        로그인
                    </Button>
                    <Button onClick={handleClickSignUp}>
                        회원가입
                    </Button>
                </BottomButtonTop>
                <ButtomButtonButtom>
                    <Button onClick={handleClickGoHome}>
                        홈화면
                    </Button>
                </ButtomButtonButtom>
            </BottomButtonContainer>
        </SIgnInPageBlock>
    );
}

export default SIgnInPage;