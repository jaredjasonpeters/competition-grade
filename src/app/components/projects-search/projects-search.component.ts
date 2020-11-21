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
  ViewEncapsulation,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-projects-search',
  templateUrl: './projects-search.component.html',
  styleUrls: ['./projects-search.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsSearchComponent implements OnInit {
  sortBy: string = 'name';
  @Output() searchEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  fetchProjects(form: NgForm) {
    console.log('FORM VALUE', form.value);
    this.searchEvent.emit(form.value.searchTerm);
  }

  clearForm(form: NgForm) {
    this.clearEvent.emit(form);
  }
}
