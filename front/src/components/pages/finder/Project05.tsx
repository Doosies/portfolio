import React, {} from 'react';
import styled from 'styled-components';
import DescMain from './DescMain';
import DescSub from './DescSub';


const Project05Block = styled.div`
    width: 100%;
`

const descSubs = [
    <p>여러개의 어플리케이션을 띄울 수 있으며<br/>나중에 클릭한 창이 제일 위로 올라옵니다.</p>,
    <p>프로필을 누르면 간단한 자기소개가 나오며<br/>최 상단의 이름이 일정 시간마다 바뀝니다.</p>,
    <p>탐색기를 누르면 포트폴리오 목록이 나오며<br/> 목록을 클릭하면 인터넷 창이 뜨는것처럼 상세정보가 나옵니다.</p>,
    <p>메일을 누르면 메일을 쓰고서 제게 전송할 수 있습니다.</p>

]
const Project05 = () => {
    return (
        <Project05Block>
            <DescMain 
                title = "songminhyung.com"
                imgPath={`img/project05_main.png`}
                githubLink='https://github.com/Doosies/portfolio'
                pageLink='https://songminhyung.com/'
            >
                처음에는 포토폴리오를 노션에 올리려고 했었습니다.<br/>
                하지만 저만의 포토폴리오를 보여드리고 싶었기 때문에<br/>
                이 사이트를 개발하게 되었습니다.<br/>
                모바일에 디바이스서도 동작 가능하게 개발하였으며<br/>
                상태관리 라이브러리는 redux가 아니라 redux-toolkit 을<br/> 
                사용해 더욱 편하고 빠른 개발이 가능했습니다.<br/><br/>
                소요기간: 2주<br />
                기술스택: react, typescript, redux-toolkit<br />
            </DescMain>
            {descSubs.map((text, i) => 
                <DescSub imgPath={`img/project05_sub0${i+1}.png`} key={`prjt05_${i}`}>
                    {text}
                </DescSub>
            )}
        </Project05Block>
    );
}

export default Project05;