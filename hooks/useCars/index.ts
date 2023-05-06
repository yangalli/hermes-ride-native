import { useApi } from "../useApi";
import carsApi from "../../services/api/carsApi";
import Car from "../../types/entities/Car";

function useCars() {
  const {
    data: cars,
    isLoading,
    refetch,
    error,
  } = useApi<Car[]>({
    key: "cars",
    fetchMethod: () => carsApi.getCars(),
  });

  async function createCar(
    name: string,
    plate: string,
    spaces: number,
    driverId: number
  ) {
    await carsApi.postCar(
      name,
      plate,
      spaces,
      driverId
    );
  }

  return { cars, createCar, isLoading, refetch, error };
}

export default useCars;
