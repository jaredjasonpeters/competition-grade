import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhyCompGradeComponent } from './why-comp-grade.component';

const whyCompGradeRoutes: Routes = [
  { path: '', component: WhyCompGradeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(whyCompGradeRoutes)],
  exports: [RouterModule],
})
export class WhyCompGradeRoutingModule {}
