import TextHighlight from "../TextHighlight/TextHighlight";
import Text from "../Text/Text";
import { CardHomeStyled } from "./styles";
import FlightInfo from "../FlightInfo/FlightInfo";

function CardHome() {
    return ( 
        <CardHomeStyled>
            <img src="./logo-image.png" height="50px" width="50px" style={{alignSelf:"center"}}/>
            <TextHighlight>Bem vindo(a) ao gerenciamento de voo da <span style={{color: "var(--orange)"}}>365 Airlines</span>!</TextHighlight>
            <Text color="blue">A gestão dos passageiros do próximo voo pode ser feita através da barra de navegação.</Text>
            <br />
            <TextHighlight>Próximo voo</TextHighlight>
            <FlightInfo label='Número:' info='777'/>
            <FlightInfo label='Origem:' info='Florianópolis (FLN)'/>
            <FlightInfo label='Destino:' info='São Paulo (CGH)'/>
            <FlightInfo label='Data:' info='25/06/2023'/>
            <FlightInfo label='Hora:' info='20:45:00'/>
        </CardHomeStyled>
     );
}

export default CardHome;