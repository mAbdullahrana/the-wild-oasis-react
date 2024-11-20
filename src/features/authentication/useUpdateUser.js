import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: updateCurrentUser,

    onSuccess: ({ user }) => {
      console.log(user);
      queryClient.setQueryData(["user"], user);
      toast.success("User successfully updated");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isLoading };
}
