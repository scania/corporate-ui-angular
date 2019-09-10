import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'corporate-ui-dev/dist';
import { Router, RoutesRecognized } from '@angular/router';

defineCustomElements(['c-navigation']);

@Component({
  selector: '[navigation]',
  styleUrls: ['./navigation.component.scss'],
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  links = [
    {
      text: 'Home', url:'home', type:'primary'
    },
    { 
      text: 'Info', 
      url:'info',
      type:'primary',
      submenu : [
        { text: 'List', url : 'list', type: 'primary'},
        { text: 'Table', url : 'table', type: 'primary'},
        { text: 'Form', url : 'form', type: 'primary'},
      ]
    },
    { 
      text: 'Contact', url:'contact', type:'primary',
      submenu : [
        { text: 'About', url : 'about', type: 'primary'},
        { text: 'Profile', url : 'profile', type: 'primary'},
      ]
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
  targetParent : String;
  isSubActive;
  subMenuData = [];

  activateSub(target) {

    if(target === '/') return ;
    target = target.replace('/','');
    const findTarget =  this.links.filter(obj => {
      return obj.text.toLowerCase() == target.toLowerCase();
    });

    if(findTarget.length > 0) this.targetParent = '/' + findTarget[0].url;
    
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
