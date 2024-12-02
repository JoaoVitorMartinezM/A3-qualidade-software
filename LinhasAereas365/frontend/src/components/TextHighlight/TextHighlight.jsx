import { TextHighlightStyled } from "./styles";

function TextHighlight({children}) {
    return ( 
        <TextHighlightStyled>{children}</TextHighlightStyled>
     );
}

export default TextHighlight;