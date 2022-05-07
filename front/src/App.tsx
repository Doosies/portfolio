import React, { useEffect } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import styled from 'styled-components';
import { issueToken } from './api/Api';
import MainPage from './components/MainPage';
import TopBar from './components/TopBar';
import { useAppDispatch } from './modules/hooks';
import { login, logout, setToken } from './modules/auth'


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
  const dispatch = useAppDispatch();
  useEffect( ()=>{
    const getAccessToken = async() => {
      const response = await issueToken();
      if (response.data.success && response.data.data) {
        dispatch(login(response.data.data));

      }else {
        dispatch(logout());
      }
    };
    getAccessToken();

  },[]);
  return (
    <BrowserRouter >
      <AppRoutes />
    </BrowserRouter>

  );
}

export default App;