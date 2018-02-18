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

  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
