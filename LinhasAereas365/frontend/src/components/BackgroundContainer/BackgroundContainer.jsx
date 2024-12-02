import { BackgroundContainerStyled } from "./styles";


function BackgroundContainer({children}) {
    return ( 
        <BackgroundContainerStyled>
            {children}
        </BackgroundContainerStyled>
     );
}

export default BackgroundContainer;