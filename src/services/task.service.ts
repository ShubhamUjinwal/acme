import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private apiService: ApiService) { }

  private _refreshDevices$ = new Subject<void>();

  get refreshDevices$() {
    return this._refreshDevices$;
  }

  fetchDevices() {
    return this.apiService.get('devices');
  }

  createDevice(data: any) {
    return this.apiService
      .post('devices', data)
      .pipe(
        tap(() => {
          this._refreshDevices$.next();
        })
      )
  }

  editDeviceSensors(id: string, data: any) {
    return this.apiService
      .patch('devices', id, data);
  }

  deleteDevice(id: string) {
    return this.apiService
      .delete('devices', id)
      .pipe(
        tap(() => {
          this._refreshDevices$.next();
        })
      )
  }
}
