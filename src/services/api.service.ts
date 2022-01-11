import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly ROOT_URL: any;

  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'http://' + location.hostname + ':3000';
  }

  get(uri: string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, id: string, payload: Object){
    return this.http.patch(`${this.ROOT_URL}/${uri}/${id}`, payload);
  }

  delete(uri: string, id: string){
    return this.http.delete(`${this.ROOT_URL}/${uri}/${id}`);
  }
}
