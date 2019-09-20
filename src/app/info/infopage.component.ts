import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html'
})
export class InfopageComponent implements OnInit {
  paramValue: Observable<Params>;

  constructor(
    route: ActivatedRoute
  ) { 
    this.paramValue = route.params;
  }

  ngOnInit() { }
}
