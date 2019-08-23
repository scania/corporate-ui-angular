import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'corporate-ui-dev/dist';
import { Router, RoutesRecognized } from '@angular/router';

defineCustomElements(['c-header', 'c-navigation']);

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  links = [
    {
      text: 'Home', url:'home', type:'primary'
    },
    { 
      text: 'Info', 
      url:'info',
      type:'primary',
      submenu : [
        { text: 'Info 1', url : 'info1', type: 'primary'},
        { text: 'Info 2', url : 'info2', type: 'primary'},
        { text: 'Info 3', url : 'info3', type: 'secondary'},
      ]
    },
    { 
      text: 'Contact', url:'contact', type:'primary',
    },
    { 
      text: 'More', url:'/more', type:'secondary'
    },
  ]

  dropdownData = [{
    id: 1,
    name: 'Profile'
  }, {
    id: 2,
    name: 'Settings'
  }];

  target : String;
  isSubActive;
  subMenuData = [];

  activateSub(target) {
    target = target.replace('/','');
    const findTarget =  this.links.filter(obj => {
      return obj.text.toLowerCase() == target.toLowerCase();
    });
    
    if(findTarget[0]) {
      this.isSubActive = findTarget[0].submenu ? true : false;
      this.subMenuData = findTarget[0].submenu ? findTarget[0].submenu : [];
    }
    
  }

  constructor( private router: Router) {
    router.events.subscribe(e => {
      if(e instanceof RoutesRecognized){
        this.target = e.url;
        this.activateSub(this.target);
      }
    });
  }

  ngOnInit() { }

}
