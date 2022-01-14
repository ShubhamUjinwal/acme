import { Component, createNgModuleRef, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { Observable, BehaviorSubject, switchMap, Subject } from 'rxjs';
import { Device } from 'src/app/models/device.model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  public devices: any = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.refreshDevices$
        .subscribe(() => {
          this.getDevices();
        })
    this.getDevices();
  }

  getDevices() {
    this.taskService
      .fetchDevices()
      .subscribe((response: any) => {
        console.log("Response", response);

        this.devices = response;

        // for (const value in response){
        //   this.devices.push(response[value]);
        // }
        console.log("Array", this.devices)
      });
  }

}
