import {Time} from "./time.model";


export interface Score {
  duration: string,
  extraTime: Time,
  fullTime: Time,
  halfTime: Time,
  penalties: Time,
  winner: string,
}
