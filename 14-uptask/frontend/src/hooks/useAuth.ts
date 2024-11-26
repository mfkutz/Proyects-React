import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/api/AuthAPI";

export const useAuth = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        // initialData: null, // Limpia datos previos
        // enabled: !!localStorage.getItem('AUTH_TOKEN'),
        retry: 0,
        refetchOnWindowFocus: false
    })

    return { data, isError, isLoading }
}