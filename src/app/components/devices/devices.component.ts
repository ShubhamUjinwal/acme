import { Component, OnInit } from '@angular/core';
import { DeviceComponent } from '../device/device.component';
import { TaskService } from 'src/services/task.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  public devices: any = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices() {
    this.taskService
      .fetchDevices()
      .subscribe((response: any) => {
        for (const value in response){
          this.devices.push(response[value])
        }
      });
  }

  addDevices() {
    this.taskService.createDevice().subscribe((response =>{
      console.log(response);
    }))
  }

  editDeviceSensor() {
    this.taskService.editDeviceSensors('61dbf4ce8d47ae9876dd78ba').subscribe((response =>{
      console.log(response);
    }))
  }

  deleteDevice() {
    this.taskService.deleteDevice('61dd1c11683b0a8b1945376f').subscribe((response =>{
      console.log(response);
    }))
  }

}
