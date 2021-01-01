import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

import { VerificationProgramComponent } from './verification-program.component';

const verificationRoutes: Routes = [
  {
    path: '',
    component: VerificationProgramComponent,
  },
];

@NgModule({
  declarations: [VerificationProgramComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(verificationRoutes)],
  exports: [RouterModule],
})
export class VerificationModule {}
