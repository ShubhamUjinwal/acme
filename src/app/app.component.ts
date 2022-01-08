import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { DevicesComponent } from './components/devices/devices.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acme';
}
