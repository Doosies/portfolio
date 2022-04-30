import React, {} from 'react';
import styled from 'styled-components';
import ClickButton from '../../ClickButton';
import StackIcon from '../../StackIcon';

interface DescMainProps {
    title: string;
    imgPath: string;
    githubLink: string;
    pageLink: string;
    children: React.ReactNode;
}

const DescMainBlock = styled.div`
    .title {
        padding: 0;
        margin: 0;
        margin-top: 1.8rem;
        
        text-align: center;
        font-size:1.7rem;
    }
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ImgContainer = styled.div`
    padding: 10px;
`;
const Img = styled.img`
    width: 100%;
`;
const LinkContainer = styled.div`
    text-align: right;
    display: flex;
    justify-content: center;
`;
const Text = styled.div`
    margin-top: 20px;
    padding: 10px;
    text-align: left;
    font-size: 14.7px;
    line-height: 30px;
`;

const DescMain = ({
    imgPath, pageLink, githubLink, title, children
}:DescMainProps) => {
    const handleClickPageButton = () => {
        window.open(pageLink, '_blank');
    };
    const handleClickGitButton = () => {
        window.open(githubLink, '_blank');
    }
    return (
        <DescMainBlock>
            <ImgContainer>
                <p className='title'>{title}</p>
                <Img src={imgPath} alt="메인설명이미지"/>
                <LinkContainer>
                    <ClickButton 
                        svgPath='M2.401 0v24h9.6v-3.527H5.929V3.526h12.146v13.421h-6.073v3.525H21.6V0H2.401zM2.401 0v24h9.6v-3.527H5.929V3.526h12.146v13.421h-6.073v3.525H21.6V0H2.401z'
                        color={'#258AAF'}
                        onClick={handleClickPageButton}
                    >
                        바로가기
                    </ClickButton>
                    <ClickButton 
                        svgPath='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
                        color={'#258AAF'}
                        onClick={handleClickGitButton}
                    >
                        깃허브
                    </ClickButton>
                </LinkContainer>
            </ImgContainer>
            <Text>
                {children}
            </Text>
        </DescMainBlock>
    );
}

export default DescMain;