import { AxiosResponse } from "axios";
import Driver from "../../../types/entities/Driver";
import { apiGet, apiPost } from "..";

const driversApi = {
  getDrivers: (): Promise<AxiosResponse<Driver[]>> => apiGet("drivers"),
  getDriver: (id: number | string): Promise<AxiosResponse<Driver>> =>
    apiGet(`driver/${id}`),
  postDriver: (
    name: string,
    cellphone: string
  ): Promise<AxiosResponse<Driver>> => apiPost("drivers", { name, cellphone }),
};

export default driversApi;
