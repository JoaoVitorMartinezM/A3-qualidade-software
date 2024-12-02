import Assento from "../Assento/Assento";
import Text from "../Text/Text";
import LegendaContainer from "../LegendaContainer/LegendaContainer"
import { PainelAssentosStyled } from "./styles";
import { useState } from "react";

function PainelAssentos({assentos, onSelecionarAssento, onAssentoOcupado}) {

    const [assentoSelecionado, setAssentoSelecionado] = useState(null);
    const [assentoOcupado, setOcupado] = useState(false);

    const handleSelecionarAssento = (assento) => {
        setAssentoSelecionado(assento);
        onSelecionarAssento(assento);
    };

    return ( 
        <>
            <PainelAssentosStyled>
                {assentos?.map((assento) => (
                    <Assento key={assento.assento} 
                            ocupado={assento.ocupado} 
                            assento={assento.assento}
                            selecionado={assentoSelecionado}
                            onSelecionarAssento={handleSelecionarAssento}
                            onAssentoOcupado={setOcupado}
                    >
                        <Text>{assento.assento}</Text>
                    </Assento>
                ))}
            </PainelAssentosStyled>
            <LegendaContainer />
        </>        
     );
}

export default PainelAssentos;