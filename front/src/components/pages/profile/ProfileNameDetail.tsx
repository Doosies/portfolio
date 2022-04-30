import React, {} from 'react';
import styled from 'styled-components';

interface ProfileNameDetailProps {
    onAnimationEnd: () => void;
}

const ProfileNameDetailBlock = styled.div`
    text-align: center;
    width: 100%;
    /* height: 180px; */

    font-size: 30px; 
    transform: translateY(-40%);

    animation: downAnimation 1s 4s;
    animation-fill-mode: both;

    p {
        opacity: 0;
        margin: 0;
        &:nth-child(2){ animation: fadefadeInDownIn10Hello 5s; animation-fill-mode:forwards;}
        &:nth-child(3){ animation: fadefadeInDownIn10 0.7s ease-in-out 1.4s; animation-fill-mode:forwards;}
        &:nth-child(4){ animation: fadefadeInDownIn10 0.7s ease-in-out 2.1s; animation-fill-mode:forwards;}

        &:first-child  { animation: fadefadeInDownIn10HelloFirst 0.7s ease-in-out 2.8s; animation-fill-mode:forwards;}
        &:last-child  { animation: fadefadeInDownIn10HelloLast 0.5s ease-in-out 2.8s; animation-fill-mode:forwards;}

    }
    .oStyle {padding: 0;height: 20px;padding: 5px;}
    .bold {font-weight: bold;}
`;

const ProfileNameDetail = ({
    onAnimationEnd
}:ProfileNameDetailProps) => {
    console.log("디테일");
    return (
        <ProfileNameDetailBlock 
            onAnimationEnd={onAnimationEnd}
        >
                <p className='oStyle'>```<br /></p>
                <p className='bold'>반갑습니다 <br/></p>
                <p className='bold'>보다 좋은 UX를<br/>
                   만들어 나가고 싶은<br/></p>
                <p className='bold'>프론트엔드 개발자 <br/>
                   송민형입니다<br/></p>
                <p className='oStyle'>```<br /></p>
        </ProfileNameDetailBlock>
    );
}

export default React.memo(ProfileNameDetail);