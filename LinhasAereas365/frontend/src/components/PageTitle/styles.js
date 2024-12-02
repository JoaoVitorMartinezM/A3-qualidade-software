import styled from 'styled-components';

export const PageTitleStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 40px 85px;
    letter-spacing: 1px;

    .page-title-text{
        color: var(--dark-blue);
    }

    hr{
        height: 10px;
        background-color: var(--orange);
        width: 450px;
    }

    @media only screen and (max-width: 570px) {
        margin-left: 30px;
        font-size: 14px;
    };

    @media only screen and (max-width: 465px) {
        hr{
            width: 200px;
        }
    };
`;