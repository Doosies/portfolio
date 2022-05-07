import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import { createBoard } from '../../../modules/auth';
// import { createBoard } from '../../../api/Api';
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
    // const token = useAppSelector(state=>state.auth.token);
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
        if (input.title.trim() === '') {
            alert('제목은 필수값 입니다.')
        }
        else if (input.content.trim() === '') {
            alert("내용은 필수값 입니다.")
        }
        else {
            dispatch(createBoard({title: input.title, content: input.content, windowId}));
            // const res = await createBoard({
            //     title: input.title,
            //     content: input.content,
            //     // token: token,
            // });
            // console.log(res);
        }
        
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