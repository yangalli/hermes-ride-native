import { useApi } from "../useApi";
import ridesApi from "../../services/api/ridesApi";
import Ride from "../../types/entities/Ride";

function useRides() {
  const {
    data: rides,
    isLoading,
    refetch,
    error,
  } = useApi<Ride[]>({
    key: "rides",
    fetchMethod: () => ridesApi.getRides(),
  });

  async function createRide(
    carSpaces: number,
    departureDay: string,
    departurePlace: string,
    departureTime: string,
    driver_id: number
  ) {
    await ridesApi.postRide(
      carSpaces,
      departureDay,
      departurePlace,
      departureTime,
      driver_id
    );
  }

  return { rides, createRide, isLoading, refetch, error };
}

export default useRides;
