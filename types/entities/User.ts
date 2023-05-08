import Ride from "./Ride";
import Car from "./Car";

export default interface User {
  id: number;
  name: string;
  email: string;
  cellphone: string;
  school: string;
  rides: Ride[];
  cars: Car[];
}
