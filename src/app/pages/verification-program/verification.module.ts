import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerificationProgramComponent } from './verification-program.component';

const verificationRoutes: Routes = [
  {
    path: '',
    component: VerificationProgramComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(verificationRoutes)],
  exports: [RouterModule],
})
export class VerificationRoutingModule {}
