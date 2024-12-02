import { Link } from 'react-router-dom';
import { HeaderNavigateStyled } from "./styles";
import { MdOutlineAirplaneTicket, MdListAlt, MdCalendarMonth} from "react-icons/md";

function HeaderNavigate({ nomePagina, to, isActive, onClickItem }) {

    const handleClick = () => {
        onClickItem(nomePagina);
    };

    return ( 
        <HeaderNavigateStyled>
            <Link 
                to={to} 
                className={`header-navigate-link ${isActive ? 'clicked' : ''}`}
                onClick={handleClick}
            >
                {nomePagina == 'LISTAGEM' && <MdListAlt size={20}/>}
                {nomePagina == 'CHECKIN' && <MdCalendarMonth size={20}/>}
                {nomePagina == 'ETICKET' && <MdOutlineAirplaneTicket size={20}/>}
                <p>{nomePagina}</p>
            </Link>            
        </HeaderNavigateStyled>        
     );
}

export default HeaderNavigate;