import React, {useState} from 'react';
import styled from 'styled-components';

interface WindowMainPageProps {
    
}

const WindowMainPageBlock = styled.div`
    /* position: relative; */
    pointer-events: none;
    user-select: none;
    width: 100%;
    height: 100%;

    padding: 10px;
    border-radius: 20px;
`
const WindowMainPage = () => {
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        // 상위 노드로부터의 이벤트 캡쳐링 방지
        e.stopPropagation();
    }
    return (
        <WindowMainPageBlock
            onMouseDown={handleMouseDown}
        >
            fsdfsdfs
        </WindowMainPageBlock>
    );
}

export default React.memo(WindowMainPage);