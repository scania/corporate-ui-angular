import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './subpages/table.component';
import { ListComponent } from './subpages/list.component';
import { FormComponent } from './subpages/form.component';

export const routes: Routes = [
  { 
    path: 'info',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'table', 
        component: TableComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      { 
        path: 'form',
        component: FormComponent 
      },
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [ RouterModule ]
})
export class InfoRoutingModule { }
