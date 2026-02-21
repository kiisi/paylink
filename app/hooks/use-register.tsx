// hooks/useRegister.ts
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { request } from "~/services/request";

interface RegisterPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const useRegister = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async (data: RegisterPayload) => request.post("/auth/register", data),
        onSuccess(data, variables, onMutateResult, context) {
            console.log("Registration successful:", data);
            navigate('/dashboard');
        },
    });
};