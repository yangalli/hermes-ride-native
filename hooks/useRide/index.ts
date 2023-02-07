import { useApi } from "../useApi";
import ridesApi from "../../services/api/ridesApi";
import Ride from "../../types/entities/Ride";

function useRide(rideId: string | undefined) {
  const {
    data: ride,
    isLoading,
    refetch,
    error,
  } = useApi<Ride>({
    key: "ride",
    fetchMethod: () => ridesApi.getRide(rideId),
  });

  return { ride, isLoading, refetch, error };
}

export default useRide;
