import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title = 'Angular Experiment';
  @Output() sidenav_toggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sideNavClick() {
    this.sidenav_toggle.emit();
  }

}
