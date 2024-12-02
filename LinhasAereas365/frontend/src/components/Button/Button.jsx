import { ButtonStyled } from "./styles";

function Button({children, variant, type, onClick}) {
    return ( 
        <ButtonStyled className={variant} type={type} onClick={onClick}>
            {children}
        </ButtonStyled>
     );
}

export default Button;