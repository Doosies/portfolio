import React, {} from 'react';
import styled from 'styled-components';
import MainPage from './components/MainPage';
import TopBar from './components/TopBar';

interface AppProps {
  
}

const AppBlock = styled.div`
  
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