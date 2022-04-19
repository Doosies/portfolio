import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, #root{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

`;

export default GlobalStyle;