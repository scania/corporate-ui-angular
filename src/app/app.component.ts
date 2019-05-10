import { Component, Injectable } from '@angular/core';
import { defineCustomElements } from 'corporate-ui-dev/dist/define';

defineCustomElements(['c-theme','c-footer','c-content']);

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cui-four';

}
