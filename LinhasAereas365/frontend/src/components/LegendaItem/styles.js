import styled from 'styled-components';

export const LegendaItemStyled = styled.div`
    display: flex;
    gap: 10px ;
    line-height: 5px;
    align-items: center;
    margin-bottom: 10px;

    .disponivel{
        width: 20px;
        height: 20px;
        border: solid 1px var(--orange);
        border-radius: 5px;
        gap: 5px;
    }

    .ocupado{
        width: 20px;
        height: 20px;
        background-color: rgba(233, 73, 75, 0.5);
        border: solid 1px var(--orange);
        border-radius: 5px;
        gap: 5px;
        
    }

    .selecionado{
        width: 20px;
        height: 20px;
        border: solid 1px var(--green);
        background-color: var(--green);
        border-radius: 5px;
        gap: 5px;
    }
`;