import React, {useState} from 'react';
import styled from 'styled-components';
import BoardBottom from './BoardBottom';
import BoardRow from './BoardRow';

interface BoardListProps {
    
}

const BoardListBlock = styled.div`
    width: 100%;
    height: 100%;   
    position: relative;

    display: flex;
    flex-direction: column;
`
const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const ListTop = styled.div`
    width:100%;
    height: 30px;
`;
const WriteButton = styled.button`
    position: absolute;
    right: 0;
`;
const board = [
    {title: "이건 그1231231233231냥 제목이1231231231라고 지어봤어", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
    {title: "제목", nickname: "송민형"},
]
const BoardList = () => {
    return (
        <BoardListBlock>
            <ListTop>
                <WriteButton>게시글 작성</WriteButton>
            </ListTop>
            <BoardRow 
                    title="제목"
                    nickname='글쓴이'
                    isTop
            />
            <List>
                {board.map( el => 
                    <BoardRow 
                        title={el.title}
                        nickname={el.nickname}
                    />
                )}
            </List>
            <BoardBottom nowPage={1}/>
        </BoardListBlock>
    );
}

export default BoardList;