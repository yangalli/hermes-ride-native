import { useApi } from "../useApi";
import driversApi from "../../services/api/driversApi";
import Driver from "../../types/entities/Driver";

function useDrivers() {
  const {
    data: drivers,
    isLoading,
    refetch,
    error,
  } = useApi<Driver[]>({
    key: "drivers",
    fetchMethod: () => driversApi.getDrivers(),
  });

  async function createDriver(name: string, cellphone: string) {
    await driversApi.postDriver(name, cellphone);
  }

  return { drivers, createDriver, isLoading, refetch, error };
}

export default useDrivers;
