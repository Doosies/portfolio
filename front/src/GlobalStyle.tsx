import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        /* box-sizing: border-box; */
    }

    html, body, #root{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #1F1D1E;
        color: white;
    }

`;

export default GlobalStyle;