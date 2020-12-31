import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DepartmentsComponent } from './departments/departments.component';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { DepartmentComponent } from './department/department.component';

const departmentsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  }
]);

@NgModule({
  declarations: [DepartmentsComponent, DepartmentComponent],
  imports: [
    departmentsRouting,
    SharedModule,
    MaterialModule
  ]
})
export class DepartmentsModule { }
