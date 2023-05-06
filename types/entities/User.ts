import Ride from "./Ride";
import Car from "./Car";

export default interface User {
  id: number;
  name: string;
  cellphone: string;
  rides: Ride[];
  cars: Car[];
}
