import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
  <div class="container">
    <h1>Home</h1>
    <h3>Visit Scania Digtal Design System at <a target='_blank' href='https://digitaldesign.scania.com'>digitaldesign.scania.com</a><c-icon name='scania-external_link'></c-icon></h3>
    <p>Developing in our design system visit our <a target='_blank' href='https://github.com/scania/corporate-ui'>github</a><c-icon name='scania-external_link'></c-icon></p>
  </div>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
