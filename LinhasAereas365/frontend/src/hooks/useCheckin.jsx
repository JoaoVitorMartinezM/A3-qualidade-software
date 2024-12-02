import { useState } from "react";
import { apiService } from "../services/api";

const useCheckin = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async (payload) => {
        payload = {...payload}
        setIsLoading(true);
        const response = await apiService.post(`/passageiros/confirmacao`, payload)
        setError(response.error);
        setData(response.data);
        setIsLoading(false);
    }

    return {
        data,
        isLoading,
        error,
        fetchData
    }
}

export default useCheckin;