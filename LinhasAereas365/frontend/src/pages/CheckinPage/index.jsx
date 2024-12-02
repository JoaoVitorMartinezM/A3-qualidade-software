import InputForm from "../../components/InputForm/InputForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import { CheckinPageStyled } from "./styles";
import * as Yup from "yup";
import useListaTodosPassageiros from "../../hooks/useListaTodosPassageiros"
import { useEffect, useState } from "react";
import BackgroundContainer from "../../components/BackgroundContainer/BackgroundContainer";
import PainelAssentos from "../../components/PainelAssentos/PainelAssentos";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { BUTTON_VARIANT } from '../../components/Button/ButtonVariant';
import useListaAssentos from "../../hooks/useListaAssentos";
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from "../../components/Input/Input";
import useCheckin from "../../hooks/useCheckin";


function CheckinPage() {
    const assentoRegExp = /^[0-9][a-fA-F]$/

    const schema = yup.object().shape({
        cpf: yup.string().required("Campo obrigatório"),
        assento: yup.string().required("Campo obrigatório"),
        malasDespachadas: yup.boolean().required("Campo obrigatório"),
      });

    const  { data: passageirosData, isLoading: isPassageiroLoading, error: isPassageiroError, fetchData: fetchPassageiroData }  = useListaTodosPassageiros();
    const  { data: assentosData, isLoading: isAssentoLoading, error: isAssentoError, fetchData: fetchAssentosData }  = useListaAssentos();
    const  { data: formData, fetchData: fetchDataForm, error: checkInError, isLoading: isCheckinLoading }  = useCheckin();
    const [assentoSelecionado, setAssentoSelecionado] = useState(null);
    const [assentoOcupado, setOcupado] = useState(false);

    useEffect( () => {
        (async () => {
            await fetchPassageiroData();
            await fetchAssentosData();
        })()
    }, [assentoOcupado]);    

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm({
        defaultValues: {          
          cpf: "selecione",
          malasDespachadas: false,
          assento: "selecione",
        },
        resolver: yupResolver(schema),
      });

    const submit = (data) => { 
        event.preventDefault();
        fetchDataForm(data);
        
    }   

    return ( 
        <>
            <BackgroundContainer>
                <img src='./background-checkin.png' height="100%" width="auto" alt="nuvens ao fundo" style={{zIndex:"-1", position: 'absolute', top:0, right:0}}/>
                <PageTitle>Realizar Checkin</PageTitle>
                    <CheckinPageStyled> 
                        <form 
                            onSubmit={handleSubmit(submit)}
                        >
                            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                <InputForm
                                    id="cpf"
                                    labelText="Passageiro"
                                    placeholder="Selecione"
                                    inputName="cpf"
                                    data={passageirosData}
                                    helperText={errors?.passageiro?.message}
                                    {...register("cpf")} />

                                <InputForm
                                    id="assento"
                                    labelText="Assento"
                                    placeholder="Selecione"
                                    inputName="assento"
                                    data={assentosData}
                                    helperText={errors?.assento?.message}
                                    {...register("assento")} />

                                <Text color="orange">Despachar malas</Text>    
                                <input type="checkbox" {...register("malasDespachadas")}/>
                            </div>
                            <div style={{display: "flex", gap:"20px"}}>
                                <Button 
                                    variant={BUTTON_VARIANT.SECONDARY} 
                                    className="secondary" 
                                    type="button" 
                                >
                                    Cancelar
                                </Button>
                                <Button variant={BUTTON_VARIANT.PRIMARY} className="primary" type="submit" >Checkin</Button>
                            </div>
                            {formData && <Text color='blue'>Checkin realizado com sucesso!!</Text>}
                            {checkInError && <Text color='orange'>Falha ao realizar checkin :(</Text>}
                            {isCheckinLoading && <Text color='blue'>Realizando checkin...</Text>}
                        </form>
                                        
                        <div>
                            <Text color="orange">Selecione o Assento:</Text>
                            <PainelAssentos assentos={assentosData} onSelecionarAssento={setAssentoSelecionado}/>
                        </div>
                                            
                    </CheckinPageStyled>
            </BackgroundContainer>            
        </>        
     );     
}

export default CheckinPage;