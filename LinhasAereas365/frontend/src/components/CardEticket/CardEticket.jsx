// import {CardEticketStyled} from "./styles.js";
import FlightInfo from "../FlightInfo/FlightInfo.jsx";
import {CardEticketStyled} from "./styles.js";





const CardEticket = ({data}) => {

    const labels = Object.keys(data)
    return(
      <CardEticketStyled>
          <h2>FLN &#10132; CGH</h2>
          <div>
              {

                  labels.map((x) =>
                      <FlightInfo key={x} label={x} info={data[x]} />
                  )

              }
          </div>


      </CardEticketStyled>
  )
}

export default CardEticket