import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings.js";

export function useBookings() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { data, isLoading, error };
}
