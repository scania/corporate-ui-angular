import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './subpages/table.component';
import { ListComponent } from './subpages/list.component';
import { FormComponent } from './subpages/form.component';

export const routes: Routes = [
  { path: 'info',  redirectTo: 'info/list', pathMatch: 'full' },
  { path: 'info/table', component: TableComponent },
  { path: 'info/list', component: ListComponent },
  { path: 'info/form', component: FormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [ RouterModule ]
})
export class InfoRoutingModule { }
