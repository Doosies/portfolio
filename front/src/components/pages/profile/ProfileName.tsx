import React, {} from 'react';
import styled from 'styled-components';

interface ProfileNameProps {
    isAnimationRunning: boolean;
    endAnimationCnt: number;
    children: React.ReactNode;
}

const ProfileNameBlock = styled.div`
    text-align: center;
    user-select: none;

    .animate{   
        animation: fadeInDown 2s ease-out 1;
    }
    /* 최초 이름에만 실행되는 클래스 */
    .animateStarct {
        animation: fadeIn 5s ease-out;
    }
    .name {
        /* height: 40px; */
        font-size: 40px;height: 50px; 
        animation-fill-mode: forwards;
    }
    .nameDetail {
        
    }
`

const ProfileName = ({
    isAnimationRunning, 
    endAnimationCnt,
    children
}:ProfileNameProps) => {

    return (
        <ProfileNameBlock>
            <p className={`
                // 애니메이션 일정시간마다 반복하는거
                ${isAnimationRunning ? 'animate' : ''} 
                // 애니메이션 시작할 때만 실행하는거
                ${endAnimationCnt < 6 ? 'animateStarct' : ''} 
                // name 클래스
                name`}
            >
                {children}
            </p>
        </ProfileNameBlock>
    );
}

export default React.memo(ProfileName);