import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private apiService: ApiService) { }

  fetchDevices() {
    return this.apiService.get('devices');
  }

  createDevice(data: any) {
    return this.apiService.post('devices', data);
  }

  editDeviceSensors(id: string, data: any) {
    return this.apiService.patch('devices', id, data);
  }

  deleteDevice(id: string) {
    return this.apiService.delete('devices', id);
  }
}
