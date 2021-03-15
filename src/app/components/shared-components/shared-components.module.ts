import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageHeaderComponent } from 'src/app/components/image-header/image-header.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { FeaturedLinksComponent } from '../featured-links/featured-links.component';

@NgModule({
  declarations: [
    ImageHeaderComponent,
    SectionHeaderComponent,
    FeaturedLinksComponent
  ],
  imports: [CommonModule],
  exports: [
    ImageHeaderComponent,
    SectionHeaderComponent,
    FeaturedLinksComponent
  ]
})
export class SharedComponentsModule {}
