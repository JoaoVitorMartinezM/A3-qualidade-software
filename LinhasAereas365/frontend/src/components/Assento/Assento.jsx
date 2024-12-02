import { AssentoStyled } from "./styles";

function Assento({ children, assento, ocupado, selecionado, onSelecionarAssento, onAssentoOcupado }) {

    const handleClickAssento = () => {
        if (!ocupado) {
            onSelecionarAssento(assento);
          }
    };

    const handleAssentoOcupado = () => {
        onAssentoOcupado(assento);
    }

    return ( 
        <AssentoStyled 
            assento={assento} 
            ocupado={ocupado} 
            onClick={handleClickAssento} 
            selecionado={selecionado} 
            className={selecionado === assento ? 'selecionado' : ''}
        >
            {children}
        </AssentoStyled>
     );
}

export default Assento;