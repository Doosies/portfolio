import React, { useState } from 'react';
import styled from 'styled-components';
import { sendMail } from '../../api/sendMail';
import Modal from '../../Modal';
import { useAppDispatch } from '../../modules/hooks';
import { removeWindow } from '../../modules/window';
import ModalPortal from '../../Portal';
import NameBox from '../NameBox';

interface SendMailProps {
    windowId: number;
}
const SendMailBlock = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
`
const Contents = styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: #1F1D1E;
    color: white;
`;
const InputArea = styled.textarea`
    width: 100%;
    height: 100%;
    background-color: #1F1D1E;
    color: white;
`;
const InputButton = styled.button`
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    width: 100px;
    background-color: #3e414f;
    color: white;
`;

const SendMail = ({
    windowId, 
}:SendMailProps) => {
    const [texts, setText] = useState({
        contact: '',
        title: '',
        detail: '',
    });
    const dispatch = useAppDispatch();


    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setText( state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }
    const handleClickSendButton = async () => {
        const res = await sendMail(texts);
        if (res.status === 200 && res.text === "OK") {
            alert("메일 전송에 성공했습니다. 확인을 누르면 창이 닫힙니다.");
            dispatch(removeWindow(windowId));
        }
    }
    return (
        <SendMailBlock>
            <NameBox text='메일 입력' textSize='18px' height='90%;'>
                <Contents>
                    <NameBox text='연락처' textSize='16px' height='10px'>
                        <Input name='contact' onChange={handleChangeText }/>
                    </NameBox>
                    <NameBox text='제목' textSize='16px' height='50px'>
                        <Input name='title' onChange={handleChangeText }/>
                    </NameBox>
                    <NameBox text='내용' textSize='16px' height='400px'>
                        <InputArea name='detail' onChange={handleChangeText }/>
                    </NameBox>
                    <InputButton onClick={handleClickSendButton}>
                        전송
                    </InputButton>
                </Contents>
            </NameBox>
        </SendMailBlock>
    );
}

export default SendMail;