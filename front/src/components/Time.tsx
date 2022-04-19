import React, {useState} from 'react';
import styled from 'styled-components';
import useServerTime from '../hooks/useServerTime';

interface TimeProps {
    
}

const TimeBlock = styled.div`
    width: 170px;
    /* height: 100px; */
    position: absolute;
    right: 0;
    padding: 15px;

    display: flex;
    justify-content: space-between;
`
const Time = () => {
    let [date, time] = useServerTime();

    return (
        <TimeBlock>
            <div>{date}</div>
            <div>{time}</div>
        </TimeBlock>
    );
}

export default Time;