import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html'
})
export class InfopageComponent implements OnInit {
  paramValue: Observable<Params>;
  content;

  infocontent = [
    {
      id : 'list',
      header : 'List',
    },
    {
      id : 'table',
      header : 'Table',
    },
    {
      id : 'form',
      header : 'Form',
    }
  ]

  constructor(
    route: ActivatedRoute
  ) { 
    this.paramValue = route.params;
  }

  ngOnInit() { }
  

}
