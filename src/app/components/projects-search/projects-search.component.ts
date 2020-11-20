import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-projects-search',
  templateUrl: './projects-search.component.html',
  styleUrls: ['./projects-search.component.css'],
})
export class ProjectsSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  fetchProjects(form: NgForm) {
    this.searchEvent.emit(form.value.searchTerm);
  }

  clearForm(form: NgForm) {
    this.clearEvent.emit(form);
  }
}
