import React, {useState} from 'react';
import styled from 'styled-components';

interface CurrentWindowProps {
    
}

const CurrentWindowBlock = styled.div`
    padding: 10px;
`
const CurrentWindow = () => {
    return (
        <CurrentWindowBlock>
            탐색기
        </CurrentWindowBlock>
    );
}

export default React.memo(CurrentWindow);