import React, {} from 'react';
import styled from 'styled-components';
import DescMain from './DescMain';
import DescSub from './DescSub';

interface Project04Props {
    
}

const Project04Block = styled.div`
    width: 100%;
`

const descSubs = [
    '한줄 혹은 여러줄에 걸쳐 주소를 입력하면 화면에 위치가 표시됩니다.',
]
const Project04 = () => {
    return (
        <Project04Block>
            <DescMain 
                title = "지도 페이지"
                imgPath={`img/project04_main.png`}
                githubLink='https://github.com/Doosies/TransMapPage'
                pageLink='https://doosies.github.io/TransMapPage/'
            >
                이번에도 아버지가 이러한 기능이 있는 앱을 개발하면<br/>
                일 할 때 좋겠다고 하셔서 개발했던 사이트입니다.<br/>
                타입스크립트를 기반으로 카카오 맵 API을 사용해 구현했습니다.<br/>
                그런데 실시간 위치 표시는 불가능했기에<br/>
                나중에 Flutter로 다시 앱을 만들었습니다.<br/><br/>
                소요기간: 1주<br />
                기술스택: react, typescript<br />
            </DescMain>
            {descSubs.map((text, i) => 
                <DescSub imgPath={`img/project04_sub0${i+1}.png`} key={text}>
                    {text}
                </DescSub>
            )}
        </Project04Block>
    );
}

export default Project04;