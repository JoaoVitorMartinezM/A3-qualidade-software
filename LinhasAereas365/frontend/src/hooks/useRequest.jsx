import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import {apiService} from "../service/api.js";



const useRequest = () => {

    const navigate = useNavigate()

    const [passageiros, setPassageiros] = useState([])
    const [eticket, setEticket] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(null)

    const getConfirmacaoPorEticket = async (filter) => {

        setIsSubmitting(true)
        const {data , error: err} = await apiService.get(`/api/passageiros/confirmacao/${filter}`)
        setError(err)
        setEticket(data)

        setIsSubmitting(false)
    }

    const getTodosPassageiros = async () => {

        setIsSubmitting(true)
        const {data , error: err} = await apiService.get(`/api/passageiros`)
        setError(err)
        setPassageiros(data)

        setIsSubmitting(false)
    }


    return {
        getConfirmacaoPorEticket,
        getTodosPassageiros,
        isSubmitting,
        error,
        eticket,
        passageiros
    }
}



export default useRequest