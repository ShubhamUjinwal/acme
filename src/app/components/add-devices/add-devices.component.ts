import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-add-devices',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.scss']
})
export class AddDevicesComponent implements OnInit {

  public deviceName = '';
  public sensorName = '';
  public sensorState = '';
  isSensorAdded = true;

  public addDeviceSensor: any = [];
  public newDevice = {};

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onCreateSensor() {
    this.addDeviceSensor.push( {
      "name": this.sensorName,
      "state": this.sensorState
    });
    this.sensorName = '';
    this.sensorState = '';
  }

  onCreateDevice() {
    this.newDevice = {
      "name": this.deviceName,
      "sensor": this.addDeviceSensor
    }
    this.taskService.createDevice(this.newDevice).subscribe((response =>{
      console.log(response);
    }))
    this.deviceName = '';
    this.addDeviceSensor = [];
    this.newDevice = {}
  }
}
