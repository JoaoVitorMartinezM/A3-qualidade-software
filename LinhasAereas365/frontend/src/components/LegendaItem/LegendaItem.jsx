import { LegendaItemStyled } from "./styles";

function LegendaItem({children, acao}) {
    return ( 
        <LegendaItemStyled>
            <div className={acao}></div>
            {children}
        </LegendaItemStyled>
     );
}

export default LegendaItem;