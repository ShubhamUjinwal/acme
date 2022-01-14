import { Component, createNgModuleRef, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { Observable, BehaviorSubject, switchMap, Subject } from 'rxjs';

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
          this.devices.push(response[value]);
        }
      });
  }

}
