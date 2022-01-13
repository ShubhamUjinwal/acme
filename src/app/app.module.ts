import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DevicesComponent } from './components/devices/devices.component';
import { SensorsComponent } from './components/sensors/sensors.component';
import { DeviceComponent } from './components/device/device.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddDevicesComponent } from './components/add-devices/add-devices.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevicesComponent,
    SensorsComponent,
    DeviceComponent,
    AddDevicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
