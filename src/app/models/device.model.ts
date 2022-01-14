import { Sensor } from '../models/sensor.model';

export class Device {
  public name: string;
  public sensor: Sensor[];

  constructor(name: string, sensor: Sensor[]) {
    this.name = name;
    this.sensor = sensor;
  }
}