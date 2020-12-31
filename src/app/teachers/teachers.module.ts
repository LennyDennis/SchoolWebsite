import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { TeachersComponent } from './teachers/teachers.component';

const aboutRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'teachers',
    component: TeachersComponent
  }
]);

@NgModule({
  declarations: [TeachersComponent],
  imports: [
    aboutRouting,
    SharedModule,
    MaterialModule
  ]
})
export class TeachersModule { }
