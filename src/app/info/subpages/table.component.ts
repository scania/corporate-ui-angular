import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
  <h4>Table</h4>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th><th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td><td>Thomas</td>
      </tr>
      <tr>
        <td>2</td><td>Cook</td>
      </tr>
    </tbody>
  </table>
  `
})
export class TableComponent implements OnInit {
  ngOnInit() { }
}
