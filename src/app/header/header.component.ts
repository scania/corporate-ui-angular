import { Component, OnInit } from '@angular/core';
import { TRUCK } from '../truck-data';
import { defineCustomElements } from 'corporate-ui-dev/dist/define';

defineCustomElements(['c-header', 'c-navigation']);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  primary = TRUCK.map(obj => {
      let newObj = {};
      newObj['text'] = obj.text;
      newObj['href'] = '/'+obj.id;
      return newObj;
  });

  constructor() { }

  ngOnInit() {
    console.log(this.primary);
  }

}
