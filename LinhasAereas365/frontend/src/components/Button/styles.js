import styled from 'styled-components';

export const ButtonStyled = styled.button`
    border-radius: 5px;
    padding: 10px;
    font-weight: 500;    
    transition: 0.2s;
    justify-content: center;

    &.primary{
        background-color: var(--dark-blue);
        color: var(--white);
        border: 1px solid var(--dark-blue);
        margin: 32px 0;
        width: 100%;
        font-size: 18px;
        line-height: 21px;
    }

    &.primary:hover{
        cursor: pointer;
        background-color: var(--white);
        color: var(--dark-blue);
        border: 1px solid var(--dark-blue);
        padding: -1px;
    }

    &.secondary{
        background-color: var(--white);
        color: var(--dark-blue);
        fill: var(--dark-blue);
        border: 1px solid var(--dark-blue);
        margin: 32px 0;
        width: 100%;
        font-size: 16px;
        line-height: 18px;
    }

    &.secondary:hover{
        cursor: pointer;
        background-color: var(--dark-blue);
        color: var(--white);
        fill: var(--white);
    }
`;