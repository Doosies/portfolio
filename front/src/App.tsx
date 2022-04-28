import React from 'react';
import { BrowserRouter, Route, Router, Routes, useRoutes } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './components/MainPage';
import TopBar from './components/TopBar';


const AppBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
`

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/main', element: <AppBlock> <TopBar /><MainPage /></AppBlock>},
  ]);
  return routes;
}
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

  );
}

export default App;