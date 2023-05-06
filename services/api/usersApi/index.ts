import { AxiosResponse } from "axios";
import User from "../../../types/entities/User";
import { apiGet, apiPost } from "..";

const usersApi = {
  getUsers: (): Promise<AxiosResponse<User[]>> => apiGet("users"),
  getUser: (id: number | string): Promise<AxiosResponse<User>> =>
    apiGet(`user/${id}`),
  postUser: (
    name: string,
    cellphone: string
  ): Promise<AxiosResponse<User>> => apiPost("users", { name, cellphone }),
};

export default usersApi;
