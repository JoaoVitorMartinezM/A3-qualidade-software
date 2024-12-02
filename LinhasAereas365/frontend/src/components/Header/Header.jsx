import { HeaderStyled } from "./styles";
import HeaderNavigate from "../HeaderNavigate/HeaderNavigate";
import { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {

    const [clickedItem, setClickedItem] = useState(null);

    const handleClickItem = (item) => {
        setClickedItem(item);
    };

    const handleClearSelection = () => {
        setClickedItem(null);
    };

    return ( 
        <HeaderStyled>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Link to="/" onClick={handleClearSelection}>
                    <img src="./logo-image.png" height="55" />
                    <img src="./logo-text.png" height="80" className="logo-text"/>
                </Link>                
            </div>    
            <HeaderNavigate 
                nomePagina="LISTAGEM" 
                to="/listagem" 
                isActive={clickedItem === "LISTAGEM"}
                onClickItem={handleClickItem}
            />
            <HeaderNavigate 
                nomePagina="CHECKIN" 
                to="/checkin" 
                isActive={clickedItem === "CHECKIN"}
                onClickItem={handleClickItem}
            />
            <HeaderNavigate 
                nomePagina="ETICKET" 
                to="/eticket"
                isActive={clickedItem === "ETICKET"}
                onClickItem={handleClickItem}
            />
        </HeaderStyled>        
     );
}

export default Header;