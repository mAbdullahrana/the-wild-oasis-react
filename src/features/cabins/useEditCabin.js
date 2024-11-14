import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editCreateCabins } from "../../services/apiCabins.js";


export function useEditCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabin, id }) => editCreateCabins(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
