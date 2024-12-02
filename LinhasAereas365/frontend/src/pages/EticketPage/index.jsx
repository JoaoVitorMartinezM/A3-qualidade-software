import PageTitle from "../../components/PageTitle/PageTitle";
import SearchArea from "../../components/SearchArea/SearchArea.jsx";
import CardEticket from "../../components/CardEticket/CardEticket.jsx";
import {useEffect, useState} from "react";
import useRequest from "../../hooks/index.js";
import PageWrapper from "../../components/PageWrapper/PageWrapper.jsx";

function EticketPage() {
    const {getConfirmacaoPorEticket, error, isSubmitting, eticket} = useRequest()
    const [search, setSearch] = useState("")

    const handleChange = (event) => {
        setSearch(event.target.value)
        getConfirmacaoPorEticket(event.target.value)

    }

    return (
        <>
            <PageTitle>Eticket</PageTitle>
            <PageWrapper>
                <SearchArea  label="Consultar e-ticket:" placeholder="Digite o e-ticket" value={search} onChange={handleChange}/>
                {
                    !!eticket && eticket?.assento &&
                    <CardEticket data={eticket}/>
                }
                {
                    error &&
                    <h1>Eticket não encontrado!</h1>
                }
            </PageWrapper>

        </>

     );
}

export default EticketPage;