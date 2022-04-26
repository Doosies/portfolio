import React, { useState } from 'react';
import styled from 'styled-components';
import { useAnimation } from '../../hooks/useAnimation';

interface ProfileProps {
    
}

const ProfileBlock = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow-y: auto;
`;

const Name = styled.div<{animation?: string}>`
    width: 100%;
    text-align: center;
    

    @keyframes fadeInDown {
        0%  { opacity: 0; transform: translateY(-40%); }
        40% { opacity: 1; transform: translateY(0); }
    }

    .animate{
        animation: fadeInDown 2s ease-out 1;
    }

    .name {font-size: 40px;height: 50px;}
`;

const NameDetail = styled.div`
    padding-top: 30px;
`;

const nameArr = [
    '송민형', 'song_MinHyung', '宋旻炯'
];
const Profile = () => {
    const [nameIdx, setNameIdx] = useState(0);
    const [isAnimationRunning,setAnimationRunning] = useState(false);

    useAnimation(setAnimationRunning, 'animate', 4000, 3000, ()=>{
        setNameIdx(idx => idx < nameArr.length-1 ? idx+1 : 0);
    });
    console.log('렌더링 프로필');
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        // 상위 노드로부터의 이벤트 캡쳐링 방지
        e.stopPropagation();
    }

    return (
        <ProfileBlock onClick={handleMouseDown} >
            <Name >
                <p className={`${isAnimationRunning ? 'animate' : ''} name`}>
                    {nameArr[nameIdx]}
                </p>
                <p>
                    반갑습니다 <br/>
                    보다 좋은 사용자 경험을 만들어 나가고 싶은<br/>
                    프론트엔드 개발자 송민형입니다.<br/>
                </p>
            </Name>
            <NameDetail>
                이건 본문내용이건 본문내용이건 본문내용<br/>
                이건 본문내용이건 본문내용이건 본문내용<br/>
                이건 본문내용이건 본문내용이건 본문내용<br/>
            </NameDetail>

        </ProfileBlock>
    );
}

export default Profile;