import React, {useState} from 'react';
import styled from 'styled-components';

interface NameBoxProps {
    text: string;
    textSize: string;
    height: string;
    children: React.ReactNode;
}

const NameBoxBlock = styled.div<{height: string}>`
    position: relative;
    width: 100%;
    height: ${({height})=>height};
    /* margin-top: 50px; */

    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1){flex: 1;}
    &:nth-child(2){flex: 1;}
    &:nth-child(3){flex: 5;}

`
const Line = styled.div`
    position: absolute;
    width: 90%;
    height: 100%;
    border: 1px solid white;
    border-radius: 20px;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
`;
const Title = styled.div<{textSize: string;}>`
    position: absolute;
    padding-left: 5px;
    padding-right: 5px;

    top: -0.5rem;
    left: 1.5rem;
    background-color: #1F1D1E;
    font-size: ${({textSize})=>textSize};
`;
const Content = styled.div`
    /* position: absolute; */
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const NameBox = ({
    text, children,textSize, height
}:NameBoxProps) => {
    return (
        <NameBoxBlock height={height}>
            <Line >
                <Title textSize={textSize}>
                    {text}
                </Title>
                <Content >
                    {children}
                </Content>
            </Line>
        </NameBoxBlock>
    );
}

export default NameBox;