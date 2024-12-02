import PageTitle from "../../components/PageTitle/PageTitle";
import {useEffect} from "react";
import useRequest from "../../hooks/index.js";
import Table from "../../components/Table/Table.jsx";
import PageWrapper from "../../components/PageWrapper/PageWrapper.jsx";

function ListagemPage() {

    const {getTodosPassageiros, error, isSubmitting, passageiros} = useRequest()

    useEffect(()=>{
        getTodosPassageiros()

    }, [])
    return (
        <>
            <PageTitle>Listagem de Passageiros</PageTitle>
            <PageWrapper>
                <Table data={passageiros} />
            </PageWrapper>


        </>

     );
}

export default ListagemPage;