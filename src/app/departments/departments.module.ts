import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DepartmentsComponent } from './departments/departments.component';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';

const departmentsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'departments',
    component: DepartmentsComponent
  }
]);

@NgModule({
  declarations: [DepartmentsComponent],
  imports: [
    departmentsRouting,
    SharedModule,
    MaterialModule
  ]
})
export class DepartmentsModule { }
