import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageHeaderComponent } from 'src/app/components/image-header/image-header.component';
import { SectionHeaderComponent} from '../../components/section-header/section-header.component'




@NgModule({
  declarations: [ImageHeaderComponent, SectionHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageHeaderComponent, SectionHeaderComponent]
})
export class SharedComponentsModule { }
