import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { AlumniComponent } from './alumni/alumni.component';

const aboutRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'alumni',
    component: AlumniComponent
  }
]);

@NgModule({
  declarations: [AlumniComponent],
  imports: [
    aboutRouting,
    SharedModule,
    MaterialModule
  ]
})
export class AlumniModule { }
