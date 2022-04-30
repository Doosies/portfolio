import { useState } from 'react';
import styled from 'styled-components';
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
const SendMail = () => {
    const text = useState({
        contact: '',
        title: '',
        text: '',
    })
    return (
        <SendMailBlock>
            <NameBox text='메일 입력' textSize='18px' height='90%;'>
                <Contents>
                    <NameBox text='연락처' textSize='16px' height='10px'>
                        <Input />
                    </NameBox>
                    <NameBox text='제목' textSize='16px' height='50px'>
                        <Input />
                    </NameBox>
                    <NameBox text='내용' textSize='16px' height='400px'>
                        <InputArea />
                    </NameBox>
                </Contents>
            </NameBox>
        </SendMailBlock>
    );
}

export default SendMail;