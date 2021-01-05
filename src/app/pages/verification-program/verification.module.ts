import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

import { MaterialModule } from 'src/app/material.module';
import { FeaturedComponent } from '../featured/featured.component';

import { VerificationProgramComponent } from './verification-program.component';

const verificationRoutes: Routes = [
  {
    path: '',
    component: VerificationProgramComponent,
  },
  // {path: 'featured',
  // children: [
  //   {path: ':item', component: FeaturedComponent}
  // ]},
];

@NgModule({
  declarations: [VerificationProgramComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(verificationRoutes), SharedComponentsModule],
  exports: [RouterModule],
})
export class VerificationModule {}
