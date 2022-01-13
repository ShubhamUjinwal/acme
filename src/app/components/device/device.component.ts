import { Component, Input, OnInit } from '@angular/core';
import { SensorsComponent } from '../sensors/sensors.component';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() device = '';
  @Input() sensor = [];
  @Input() deviceId = '';

  public sensorArray: any = [];

  public updateDevice = {};

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  deleteDevice() {
    this.taskService.deleteDevice(this.deviceId).subscribe((response =>{
      console.log(response);
    }))
  }
}
