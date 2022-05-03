import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import BoardBottom from './BoardBottom';
import BoardRow from './BoardRow';

interface BoardListProps {
    windowId: number;
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
    display: flex;
    justify-content: flex-end;
    /* align-items: center; */
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
const BoardList = ({
    windowId, 
}:BoardListProps) => {
    return (
        <BoardListBlock>
            <ListTop>
                <Button width='100px'>게시글 작성</Button>
            </ListTop>
            <BoardRow 
                    title="제목"
                    nickname='글쓴이'
                    isTop
            />
            <List>
                {board.map( (el,i) => 
                    <BoardRow 
                        title={el.title}
                        nickname={el.nickname}
                        key={`boardlist${i}번쨰: ${el.title} ${el.nickname} `}
                    />
                )}
            </List>
            <BoardBottom nowPage={1} windowId={windowId}/>
        </BoardListBlock>
    );
}

export default BoardList;