import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public data = {
    "name": "Plane",
    "sensor": [
      {
        "name": "Tire pressure",
        "state": "Moderate"
      },
      {
        "name": "Current temperature",
        "state": "Low"
      },
      {
        "name": "Engine oil",
        "state": "Low"
      }
    ]
  }

  constructor(private apiService: ApiService) { }

  fetchDevices() {
    return this.apiService.get('devices');
  }

  createDevice() {
    return this.apiService.post('devices', this.data);
  }

  editDeviceSensors(id: string) {
    return this.apiService.patch('devices', id, this.data);
  }

  deleteDevice(id: string) {
    return this.apiService.delete('devices', id);
  }
}
