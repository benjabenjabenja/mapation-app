//Styled:
import styled from 'styled-components';

const LogoStyled = styled.svg`
    width: 70px;
    height: 70px;
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 9999;
    opacity: 0.8;
`;

export const LogoMapationApp: React.FC = () => {
    return (
        <LogoStyled width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="65" cy="65" r="60" stroke="#007BFF" strokeWidth="10" fill="transparent"/>
            <path d="M65 25C52 25 42 35 42 48C42 62 65 100 65 100C65 100 88 62 88 48C88 35 78 25 65 25ZM65 58C59.5 58 55 53.5 55 48C55 42.5 59.5 38 65 38C70.5 38 75 42.5 75 48C75 53.5 70.5 58 65 58Z" fill="#007BFF"/>
        </LogoStyled>
    );
}

export default LogoMapationApp;