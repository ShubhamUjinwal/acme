import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  @Input() sensor = [];

  public sensorArray: any = [];
  constructor() { }

  ngOnInit(): void {
    for (const value in this.sensor){
      this.sensorArray.push(this.sensor[value])
    }
  }

}
