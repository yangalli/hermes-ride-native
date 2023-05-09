import Driver from "./Driver";
import User from "./User";

export default interface Ride {
  id: number;
  carSpaces: number;
  departureDay: string;
  departurePlace: string;
  departureTime: string;
  contributionSuggestion: number;
  driverId: number;
  userId: number;
  eventId: number;
}
