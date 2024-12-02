import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: var(--dark-blue);
    width: 100%;
    height: 100px;
    align-items: center;
    padding: 0 50px;

    @media only screen and (max-width: 630px) {
        padding: 0 10px;
        .logo-text {
            display: none;
        }
    }; 
`;