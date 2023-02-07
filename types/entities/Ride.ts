import Driver from "./Driver";

export default interface Ride {
  id: number;
  carSpaces: number;
  departureDay: string;
  departurePlace: string;
  departureTime: string;
  contributionSuggestion: number;
  driver: Driver;
}
