import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useAnimation } from '../../hooks/useAnimation';
import ProfileContents from './profile/ProfileContents';
import ProfileName from './profile/ProfileName';
import ProfileNameDetail from './profile/ProfileNameDetail';


const ProfileBlock = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    padding-top: 50px;
    overflow-y: auto;
    user-select: none;

     @keyframes fadeIn {
         0%  { opacity: 0; }
         80% { opacity: 0; }
         100% { opacity: 1;}
     }
     @keyframes fadeInDown {
         0%  { opacity: 0; transform: translateY(-40%); }
         40% { opacity: 1; transform: translateY(0); }
     }
     @keyframes downAnimation {
         0%   {transform: translateY(-10%)}
         /* 50%  {transform: translateY(0%); } */
         100% {transform: translateY(0%) scale(0.5);}

     }
     @keyframes fadefadeInDownIn10 {
         0%   { opacity: 0; transform: translateY(-10%);}
         100% { opacity: 1; transform: translateY(0%); }
     }
     @keyframes fadefadeInDownIn10Hello {
         0%   { opacity: 0; transform: translateY(-10%);}
         7%   { opacity: 1; transform: translateY(0%); }
         20%  { opacity: 1; transform: translateY(0%);}
         21%  { display: none;}
         100% { display: none;}
     }
     @keyframes fadefadeInDownIn10HelloFirst {
         0%   { opacity: 0; transform: translateY(-10%);}
         100% { opacity: 1; transform: translateY(100%); }
     }
     @keyframes fadefadeInDownIn10HelloLast {
         0%   { opacity: 0; transform: translateY(-10%);}
         100% { opacity: 1; transform: translateY(100%); }
     }
`;

const nameArr = [
    '송민형', 'song_MinHyung', '宋旻炯',
];

const Profile = () => {
    const [nameIdx, setNameIdx] = useState(0);
    const [isAnimationRunning,setAnimationRunning] = useState(false);
    const endAnimationCnt = useRef(0);

    useAnimation(setAnimationRunning, 4000, 6000, ()=>{
        setNameIdx(idx => idx < nameArr.length-1 ? idx+1 : 0);
    });
    
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        // 상위 노드로부터의 이벤트 캡쳐링 방지
        e.stopPropagation();
    }
    const handleEndAnimation = () => { 
        endAnimationCnt.current ++; 
    }

    return (
        <ProfileBlock onClick={handleMouseDown} >
            <ProfileName 
                endAnimationCnt={endAnimationCnt.current}
                isAnimationRunning={isAnimationRunning}
            >
                {nameArr[nameIdx]}
            </ProfileName>
            <ProfileNameDetail onAnimationEnd={handleEndAnimation}/>
            <ProfileContents />

        </ProfileBlock>
    );
}

export default Profile;