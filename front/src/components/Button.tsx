import React, {useState} from 'react';
import styled from 'styled-components';

interface ButtonProps {
    onClick?: () => void;
    width?: string;
    children: React.ReactNode;
}

const ButtonBlock = styled.div<{width?: string}>`
    /* position: relative; */
    padding: 5px;
    height: 30px;
    width: ${({width})=>width ? width : '100%'};
    text-align: center;
    border: solid 0.1px grey;
    cursor: pointer;
    &:hover {
        border: solid 1px white;
    }
    &:active {
        color: #1E1C1C;
        background-color: white;
    }
`;
const Button = ({
    children, onClick, width
}:ButtonProps) => {
    return (
        <ButtonBlock onClick={onClick} width={width}>
            {children}
        </ButtonBlock>
    );
}

export default Button;