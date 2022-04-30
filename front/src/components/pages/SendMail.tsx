import React, { useState } from 'react';
import styled from 'styled-components';
import { sendMail } from '../../api/sendMail';
import NameBox from '../NameBox';

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

const Text = styled.div`
    position: absolute;
    padding: 0;
    z-index: 1000;
    background-color: white;

`;
const SendMail = () => {
    const [texts, setText] = useState({
        contact: '',
        title: '',
        detail: '',
    });
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setText( state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }
    const handleClickSendButton = async () => {
        const res = await sendMail(texts);
        if (res.status === 200 && res.text === "OK") {
            console.log("전송에 성공했습니다.");
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
            <Text />
        </SendMailBlock>
    );
}

export default SendMail;