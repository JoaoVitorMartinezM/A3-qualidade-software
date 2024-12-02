import styled from 'styled-components';


export const TextStyled = styled.p`
    color: ${(props) => props.color == 'orange' ? 'var(--orange)' : 'var(--dark-blue)'};
    font-size: 18px;
    line-height: 24px;
`;