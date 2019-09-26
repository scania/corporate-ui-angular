import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { items } from './../items';

@Component({
  selector: '[navigation]',
  styleUrls: ['./navigation.component.scss'],
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  items = items;
  active:any = {};

  dropdownData = [{
    id: 1,
    name: 'Profile'
  }, {
    id: 2,
    name: 'Settings'
  }];

  constructor( 
    router: Router,
    ) {
    router.events.subscribe(e => {
      if(e instanceof RoutesRecognized){
        // match the parent url
        const segmentPath = e.url === '/' ? ['/home'] : e.url.match(/^\/(\w+)/gm);
        this.active = items.find(item => {
          return item.url === segmentPath[0];
        }) || {};
      }
    });
  }

  ngOnInit() { }

}
