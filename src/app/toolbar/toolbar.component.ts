import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";

declare var jQuery: any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    jQuery(".button-collapse").sideNav();
  }

}
