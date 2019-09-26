import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { TableComponent } from './subpages/table.component';
import { FormComponent } from './subpages/form.component';
import { ListComponent } from './subpages/list.component';


@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    ListComponent,
  ],
  imports: [
    InfoRoutingModule,
    CommonModule
  ],
})
export class InfoModule { }
