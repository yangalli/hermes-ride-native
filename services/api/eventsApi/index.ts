import { AxiosResponse } from "axios";
import Event from "../../../types/entities/Event";
import { apiGet, apiPost } from "..";

const eventsApi = {
  getEvents: (): Promise<AxiosResponse<Event[]>> => apiGet("events"),
  postEvent: (
    name: string,
    cellphone: string
  ): Promise<AxiosResponse<Event>> => apiPost("events", { name, cellphone }),
};

export default eventsApi;
