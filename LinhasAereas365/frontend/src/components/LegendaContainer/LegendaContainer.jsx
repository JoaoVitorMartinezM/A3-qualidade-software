import LegendaItem from "../LegendaItem/LegendaItem";
import { LegendaContainerStyled } from "./styles";

function LegendaContainer() {
    return ( 
        <LegendaContainerStyled>
            <LegendaItem acao="disponivel">Assento disponível</LegendaItem>
            <LegendaItem acao="ocupado">Assento ocupado</LegendaItem>
            <LegendaItem acao="selecionado">Assento selecionado</LegendaItem>
        </LegendaContainerStyled>
     );
}

export default LegendaContainer;