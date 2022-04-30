import styled from 'styled-components';

interface StackIconProps {
    showString: string, 
    iconName: string, 
    color: string
    logoColor: string;
    iconOnly?: boolean;
}

const StackIconBlock = styled.img`
    padding-left: 2px;
    padding-right: 2px;
`
const StackIcon = ({
    showString, iconName, color, logoColor, iconOnly
}:StackIconProps) => {
    if (iconOnly) {return <div>아이콘</div>;}
    else {
        return <StackIconBlock 
            src={`https://img.shields.io/badge/${showString}-${color}?style=for-the-badge&logo=${iconName}&logoColor=${logoColor}`} alt={showString}/>
    }
}

export default StackIcon;