import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import {SharedComponentsModule} from '../../components/shared-components/shared-components.module'
import { WhyCompGradeComponent } from './why-comp-grade.component';


const whyCompGradeRoutes: Routes = [
  { path: '', component: WhyCompGradeComponent },
];

@NgModule({
  declarations: [WhyCompGradeComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(whyCompGradeRoutes), SharedComponentsModule],
  exports: [RouterModule],
})
export class WhyCompGradeModule {}
