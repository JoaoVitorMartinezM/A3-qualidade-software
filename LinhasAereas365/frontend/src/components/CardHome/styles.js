import styled from 'styled-components';

export const CardHomeStyled = styled.div`
    background-color: var(--light-blue);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 500px;
    padding: 36px 65px;
    line-height: 20px;
    border-radius: 10px;
    background: linear-gradient(to bottom, var(--light-blue) 55%, #E0F0F6 50%);

    @media only screen and (max-width: 520px) {
        width: 90%;
        padding: 25px;
    }; 
`;