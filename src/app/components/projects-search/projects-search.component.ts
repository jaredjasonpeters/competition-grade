import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutService } from 'src/app/shared/layout.service';

@Component({
  selector: 'app-projects-search',
  templateUrl: './projects-search.component.html',
  styleUrls: ['./projects-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsSearchComponent implements OnInit {
  searchBy: string = 'name';
  @Output() searchEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}

  fetchProjects(form: NgForm): void {
    this.searchEvent.emit([form.value.searchTerm, this.searchBy]);
  }

  clearForm(form: NgForm): void {
    this.clearEvent.emit(form);
  }
}
