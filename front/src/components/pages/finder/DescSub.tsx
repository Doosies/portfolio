import React, {useState} from 'react';
import styled from 'styled-components';

interface DescSubProps {
    imgPath: string;
    children: React.ReactNode;
}

const DescSubBlock = styled.div`
    
`

const ImgContainer = styled.div`
    padding: 10px;
    padding-top: 100px;
`;
const Img = styled.img`
    width: 100%;
`;

const DescSub = ({
    imgPath, children
}: DescSubProps) => {
    return (
        <DescSubBlock>
            <ImgContainer>
                <Img src={imgPath} alt="메인설명이미지"/>
                {children}
            </ImgContainer>
        </DescSubBlock>
    );
}

export default DescSub;