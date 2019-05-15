import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <p>Some text goes here</p>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
