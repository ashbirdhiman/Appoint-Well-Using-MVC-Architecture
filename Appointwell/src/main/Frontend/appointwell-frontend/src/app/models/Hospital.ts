import {Doctor} from "./Doctor";

export class Hospital {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  doctors: Doctor[];
  address: string;
  waitTime: number;
  distance?: number;
  isFarthest?: boolean;
  discount?: string;  // Make 'discount' optional

  constructor(
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    doctors: Doctor[],
    address: string,
    waitTime: number,
    distance: number,
    isFarthest: boolean,
    discount?: string  // Optional in the constructor
  ) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.doctors = doctors;
    this.address = address;
    this.waitTime = waitTime;
    this.distance = distance;
    this.isFarthest = isFarthest;
    this.discount = discount;
  }
}
