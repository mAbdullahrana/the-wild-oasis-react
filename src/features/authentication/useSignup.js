import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: (newUser) => signUpApi(newUser),

    onSuccess: () => {
      toast.success(
        `Account successfully created please verify the new account from user's email address`
      );

    },

    onError: (err) => toast.error(err.message),
  });

  return { signUp, isLoading };
}
