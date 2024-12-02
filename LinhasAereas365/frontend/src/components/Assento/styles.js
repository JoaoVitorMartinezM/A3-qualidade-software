import styled from 'styled-components';

export const AssentoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.ocupado ? 'var(--orange)' : 'var(--white)')};
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  border: solid 1px var(--orange);
  ${(props) =>
    props.assento && props.assento.includes('C') &&
    `
      margin-right: 30px !important;
    `}

  &.selecionado {
      background-color: var(--green);
    }
    
:hover{
        cursor: pointer;
}
`;