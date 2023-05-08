import Ride from "./Ride";
import User from "./User";

export default interface Event {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  rides: Ride[];
  users: User[];
}
