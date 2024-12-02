import styled from 'styled-components';

export const HeaderNavigateStyled = styled.div`
    .header-navigate-link {
        text-decoration: none;
        color: var(--white);
        font-size: 16px;
        font-weight: 300;
        display: flex;
        flex-direction: row;
        gap: 2px;
        padding: 10px;

        &:hover {
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid var(--orange);
        padding: -1px;
        }
    }

    .header-navigate-link.clicked {
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid var(--orange);   
        background-color: var(--light-blue);
        color: var(--dark-blue);
        padding: -1px;
    }
`;