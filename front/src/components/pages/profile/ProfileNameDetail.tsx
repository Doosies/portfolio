import React, {} from 'react';
import styled from 'styled-components';

interface ProfileNameDetailProps {
    onAnimationEnd: () => void;
}

const ProfileNameDetailBlock = styled.div`
    text-align: center;
    width: 100%;
    height: 170px;

    font-size: 23px; 
    transform: translateY(-40%);
    user-select: none;

    animation: downAnimation 1s ease-in-out 4s;
    animation-fill-mode: forwards;

    p {
        opacity: 0;
        margin: 0;
        &:nth-child(2){ animation: fadefadeInDownIn10 1s; animation-fill-mode:forwards;}
        &:nth-child(3){ animation: fadefadeInDownIn10 1s ease-in-out 1s; animation-fill-mode:forwards;}
        &:nth-child(4){ animation: fadefadeInDownIn10 1s ease-in-out 2s; animation-fill-mode:forwards;}

        &:first-child  { animation: fadefadeInDownIn10 1s ease-in-out 3s; animation-fill-mode:forwards;}
        &:last-child  { animation: fadefadeInDownIn10 1s ease-in-out 3s; animation-fill-mode:forwards;}

    }
    .oStyle {padding: 5px;}
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
                <p className='oStyle'>OOO<br /></p>
                <p className='bold'>반갑습니다 <br/></p>
                <p className='bold'>보다 좋은 UX를<br/>
                   만들어 나가고 싶은<br/></p>
                <p className='bold'>프론트엔드 개발자 <br/>
                   송민형입니다<br/></p>
                <p className='oStyle'>OOO<br /></p>
        </ProfileNameDetailBlock>
    );
}

export default React.memo(ProfileNameDetail);