import {SearchAreaStyled} from "./styles.js";


const SearchArea = ({label, placeholder, onChange}) => {
  return(

      <SearchAreaStyled>
          <h2>{label}</h2>
          <input id="search" type="text" placeholder={placeholder} onChange={onChange}/>


      </SearchAreaStyled>

  )
}

export default SearchArea