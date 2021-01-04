import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DepartmentsComponent } from './departments/departments.component';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const departmentsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'department-detail/:id',
    component: DepartmentDetailComponent
  }
]);

@NgModule({
  declarations: [DepartmentsComponent, DepartmentDetailComponent],
  imports: [
    departmentsRouting,
    SharedModule,
    MaterialModule
  ]
})
export class DepartmentsModule { }
