import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { MaterialModule } from 'src/app/material.module';

import { WhyCompGradeComponent } from './why-comp-grade.component';
import { SectionHeaderComponent} from '../../components/section-header/section-header.component'

const whyCompGradeRoutes: Routes = [
  { path: '', component: WhyCompGradeComponent },
];

@NgModule({
  declarations: [WhyCompGradeComponent, SectionHeaderComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(whyCompGradeRoutes)],
  exports: [RouterModule],
})
export class WhyCompGradeModule {}
