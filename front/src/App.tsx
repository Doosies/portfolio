import React, {} from 'react';
import styled from 'styled-components';
import MainPage from './components/MainPage';
import TopBar from './components/TopBar';

interface AppProps {
  
}

const AppBlock = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: hidden;
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