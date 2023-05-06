import { AxiosResponse } from "axios";
import Car from "../../../types/entities/Car";
import { apiGet, apiPost } from "..";

const carsApi = {
  getCars: (): Promise<AxiosResponse<Car[]>> => apiGet("cars"),
  getCar: (id: string | undefined): Promise<AxiosResponse<Car>> =>
    apiGet(`cars/${id}`),
  postCar: (
    name: string,
    plate: string,
    spaces: number,
    driverId: number
  ): Promise<AxiosResponse<Car>> =>
    apiPost("cars", {
      name,
      plate,
      spaces,
      driverId
    }),
};

export default carsApi;
