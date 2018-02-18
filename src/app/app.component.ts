import {Component, ViewChild, EventEmitter, Inject} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {} from '@types/googlemaps';
import * as $ from 'jquery';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class AppComponent {
  title = 'app';

  modalActions = new EventEmitter<string|MaterializeAction>();

  printMapModal() {
    var content = window.document.getElementById("map-modal");
    var newWindow = window.open();
    newWindow.document.write(content.innerHTML);
    newWindow.print();
  }
}
