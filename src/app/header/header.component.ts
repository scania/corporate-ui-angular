import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'corporate-ui-dev/dist/define';

defineCustomElements(['c-header', 'c-navigation']);

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  links = [
    { text: 'Home', url:'home' },
    { text: 'Info', url:'info' },
    { text: 'Contact', url:'contact' },
  ]

  dropdownData = [{
    id: 1,
    name: 'Profile'
  }, {
    id: 2,
    name: 'Settings'
  }]

  constructor() { }

  ngOnInit() {
  }

}
