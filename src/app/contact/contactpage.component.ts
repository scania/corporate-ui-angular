import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html' 
})
export class ContactpageComponent implements OnInit {
  paramValue: Observable<Params>;

  constructor(
    route: ActivatedRoute
  ) { 
    this.paramValue = route.params;
  }

  ngOnInit() { }
}
