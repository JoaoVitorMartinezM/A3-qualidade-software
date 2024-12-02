import {TableStyled} from "./styles.js";


const Table = ({data}) => {
    return(

        <TableStyled border="2">
            <tr>
                <th>CPF</th>
                <th>Nome</th>
                <th>Data de Nascimento</th>
                <th>Nível Fidelidade</th>
                <th>Milhas</th>
                <th>Assento</th>
                <th>Eticket</th>
            </tr>
            {
                data.map(
                    (item) =>
                        <tr>
                            <td>{item.cpf}</td>
                            <td>{item.nome}</td>
                            <td>{item.dataNascimento}</td>
                            <td>{item.classificacao}</td>
                            <td>{item.milhas}</td>
                            <td>{item.assento}</td>
                            <td>{item.eticket}</td>
                        </tr>


                )
            }
        </TableStyled>
        )

}

export default Table