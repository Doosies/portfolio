import styled from 'styled-components';

interface StackIconProps {
    showString: string, 
    iconName: string, 
    color: string
}

const StackIconBlock = styled.img`
    padding-left: 2px;
    padding-right: 2px;
`
const StackIcon = ({
    showString, iconName, color,
}:StackIconProps) => {
    return (
        <StackIconBlock 
            src={`https://img.shields.io/badge/${showString}-${color}?style=for-the-badge&logo=${iconName}&logoColor=black`} alt={showString}/>
    );
}

export default StackIcon;