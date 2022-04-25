import React, {} from 'react';
import styled from 'styled-components';
import MainPage from './components/MainPage';
import TopBar from './components/TopBar';

interface AppProps {
  
}

const AppBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
`
const App = () => {
  return (
    <AppBlock>
      <TopBar />
      <MainPage />
    </AppBlock>
  );
}

export default App;