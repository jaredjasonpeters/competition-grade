import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-projects-search',
  templateUrl: './projects-search.component.html',
  styleUrls: ['./projects-search.component.css'],
})
export class ProjectsSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  fetchProjects(form: NgForm) {
    console.log('FORM', form);
    this.searchEvent.emit(form.value.searchTerm);
    // form.reset();
  }
}
