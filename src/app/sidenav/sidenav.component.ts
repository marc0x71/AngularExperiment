import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenavRef') sidenavRef;

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    console.log("onToggle");
    this.sidenavRef.toggle();
  }

}
