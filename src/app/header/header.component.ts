import { Component, OnInit } from '@angular/core';
import { TRUCK } from '../data/truck-data';
import { defineCustomElements } from 'corporate-ui-dev/dist/define';

defineCustomElements(['c-header', 'c-navigation']);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  primary = TRUCK.map(obj => {
      let newObj = {};
      newObj['text'] = obj.text;
      newObj['href'] = '/detail/'+obj.id;
      return newObj;
  });

  constructor() { }

  ngOnInit() {
  }

}
