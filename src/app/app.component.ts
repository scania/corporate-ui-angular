import { Component, Injectable } from '@angular/core';
import { defineCustomElements } from 'corporate-ui-dev/dist/define';

defineCustomElements(['c-theme','c-footer','c-container','c-content']);

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-cui';
}
