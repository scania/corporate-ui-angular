import { Component, Injectable } from '@angular/core';
import { theme as scania} from 'scania-theme';
import { defineCustomElements, addTheme } from 'corporate-ui-dev';

defineCustomElements('all');
addTheme(scania);

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: '#app-root',
  styleUrls : ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-cui';
}
