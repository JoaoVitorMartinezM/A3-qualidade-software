import { useState } from "react";
import { apiService } from "../services/api";

const useListTodosPassageiros = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await apiService.get(`/passageiros/pendentes`)
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

export default useListTodosPassageiros;