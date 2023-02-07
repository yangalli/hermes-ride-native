import Ride from "./Ride";

export default interface Driver {
  id: number;
  name: string;
  cellphone: string;
  rides: Ride[];
}
