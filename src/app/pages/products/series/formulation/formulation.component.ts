import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { SeriesFormulationService } from 'src/app/shared/series-formulation.service';
import { Formulation } from './formulation.model';

@Component({
  selector: 'app-formulation',
  templateUrl: './formulation.component.html',
  styleUrls: ['./formulation.component.css'],
})
export class FormulationComponent implements OnInit, OnChanges {
  @ViewChild('formulationContainer', { static: true }) formulationContainer;
  @ViewChild('informationCard', { static: true }) informationCard;
  @ViewChild('toggleButton', { static: true }) toggleButton;
  @Input() seriesInfo: any;
  @Input() seriesName: any;
  @Output() toggledEvent: EventEmitter<boolean> = new EventEmitter();

  toggled: boolean = true;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.renderer.setStyle(
      this.informationCard._element.nativeElement,
      'background-image',
      `url(/assets/${this.seriesName}_color_bg.jpg)`
    );
  }

  toggleDisplay() {
    let elem = this.formulationContainer._element.nativeElement;
    let elem2 = this.informationCard._element.nativeElement;
    let toggle_elem = this.toggleButton._elementRef.nativeElement;

    this.toggledEvent.emit(this.toggled);

    this.renderer.addClass(toggle_elem, 'spin');
    this.renderer.removeClass(toggle_elem, 'spinback');
    if (!this.toggled) {
      this.renderer.removeClass(elem, 'flipback');
      this.renderer.addClass(elem, 'flip');

      this.renderer.addClass(elem2, 'flipback');
      this.renderer.setStyle(elem2, 'animation-delay', '800ms');
      this.renderer.setStyle(elem, 'animation-delay', '300ms');
      this.renderer.removeClass(elem2, 'flip');
    } else {
      this.renderer.removeClass(toggle_elem, 'spin');
      this.renderer.addClass(toggle_elem, 'spinback');
      this.renderer.removeClass(elem2, 'flipback');
      this.renderer.addClass(elem2, 'flip');

      this.renderer.removeClass(elem, 'flip');
      this.renderer.setStyle(elem, 'animation-delay', '800ms');
      this.renderer.setStyle(elem2, 'animation-delay', '300ms');
      this.renderer.addClass(elem, 'flipback');
    }
    this.toggled = !this.toggled;
  }
}
