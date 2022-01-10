import { Component, OnInit } from '@angular/core';
import { SensorsComponent } from '../sensors/sensors.component';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  createDevices() {
    this.taskService.createDevice('Fridge', 'temperature').subscribe((response: any) => {
      console.log(response);
    });
  }

}
