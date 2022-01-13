import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  @Input() sensor = [];
  @Input() deviceId = '';
  public editSensors = true;

  public sensorArray: any = [];
  public updatedSensors: any = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    for (const value in this.sensor){
      this.sensorArray.push(this.sensor[value])
    }
  }

  edit(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
  }

  editDeviceSensor(name: String, event: Event) {
    const state = (<HTMLInputElement>event.target).value;

    this.sensorArray = this.sensorArray.map((obj: any) => 
      obj.name === name ? { ...obj, state: state} : obj
    );
  }

  updateDevice() {
    this.taskService.editDeviceSensors(this.deviceId, {"sensor" : this.sensorArray}).subscribe((response =>{
      console.log(response);
    }));
  }
}
