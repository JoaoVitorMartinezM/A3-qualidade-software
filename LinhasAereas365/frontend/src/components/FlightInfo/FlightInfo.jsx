import { FlightInfoStyled } from "./styles";
import Text from "../Text/Text";

function FlightInfo({label, info}) {
    return ( 
        <FlightInfoStyled>
            <Text color="orange">{label}:</Text>
            <Text color="blue">{info}</Text>
        </FlightInfoStyled>
     );
}

export default FlightInfo;