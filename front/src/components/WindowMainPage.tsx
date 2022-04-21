import React, {useState} from 'react';
import styled from 'styled-components';

interface WindowMainPageProps {
    
}

const WindowMainPageBlock = styled.div`
    /* position: absolute; */
    pointer-events: none;
    user-select: none;
    width: 100%;
    height: 100%;

    padding: 10px;
`
const WindowMainPage = () => {
    return (
        <WindowMainPageBlock>
            fsdfsdfs
        </WindowMainPageBlock>
    );
}

export default WindowMainPage;