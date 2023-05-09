import { AxiosResponse } from "axios";
import Ride from "../../../types/entities/Ride";
import { apiGet, apiPost } from "..";

const ridesApi = {
  getRides: (): Promise<AxiosResponse<Ride[]>> => apiGet("rides"),
  getRide: (id: string | undefined): Promise<AxiosResponse<Ride>> =>
    apiGet(`rides/${id}`),
  postRide: (
    carSpaces: number,
    departureDay: string,
    departurePlace: string,
    departureTime: string,
    contributionSuggestion: number,
    driverId: number,
    userId: number,
    eventId: number,
  ): Promise<AxiosResponse<Ride>> =>
    apiPost("rides", {
      carSpaces,
      departureDay,
      departurePlace,
      departureTime,
      contributionSuggestion,
      driverId,
      userId,
      eventId
    }),
};

export default ridesApi;
