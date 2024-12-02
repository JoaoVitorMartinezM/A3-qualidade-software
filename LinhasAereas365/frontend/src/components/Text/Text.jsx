import { TextStyled } from "./styles";

function Text({children, color}) {
    return ( 
        <TextStyled color={color}>{children}</TextStyled>
     );
}

export default Text;