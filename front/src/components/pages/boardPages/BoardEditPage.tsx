import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import { test } from '../../../api/Api';
import { useAppDispatch, useAppSelector } from '../../../modules/hooks';
import { changeRoute, RoutePages } from '../../../modules/route';
import Button from '../../Button';

interface BoardEditPageProps {
    windowId: number;
}

const BoardEditPageBlock = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 20px;
`
const Title = styled.input`
    width: 100%;
    height: 30px;
`;
const Content = styled.textarea`
    width: 100%;
    height: 100%;
`;
const BottomContainer = styled.div`
    width: 100%;
    /* height: 60px; */
    display: flex;
    justify-content: center;
    align-items: center;

`;
const BoardEditPage = ({
    windowId
}:BoardEditPageProps) => {
    const [input, setInput] = useState({
        title: '',
        content: '',
    })
    const token = useAppSelector(state=>state.auth.token);
    const dispatch = useAppDispatch();

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.id]:e.target.value,
        });
        // useAppSelector(state=>state.auth.token);
    }
    
    const handleClickCancel = () => {
        dispatch(changeRoute({route: RoutePages.Main, windowId}))
    }
    const handleClickAppy = async() => {
        console.log(input);
        const a= await test(token.accessToken);
        console.log(a);
    }
    return (
        <BoardEditPageBlock>
            <Title onChange={handleChangeInput} value={input.title} id="title" className='item' placeholder='제목을 입력해주세요' maxLength={50}/>
            <Content onChange={handleChangeInput} value={input.content} id="content" className='item' placeholder='내용을 입력해주세요' maxLength={2000}/>
            <BottomContainer>
                <Button onClick={handleClickAppy} >적용</Button>
                <Button onClick={handleClickCancel}>취소</Button>
            </BottomContainer>
        </BoardEditPageBlock>
    );
}

export default BoardEditPage;