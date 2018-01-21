import {Component, OnInit, ViewChild, EventEmitter, Inject} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import * as jsPDF from 'jspdf'
import * as html2canvas from "html2canvas"

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class AppComponent implements OnInit {
  title = 'app';

  modalActions = new EventEmitter<string|MaterializeAction>();

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  ngOnInit() {}

  download(){
     const elementToPrint = document.getElementById('map-modal');
     console.log('map-modal',elementToPrint); //The html element to become a pdf
     const pdf = new jsPDF('p', 'pt', 'a4');
     pdf.addHTML(elementToPrint, () => {
       pdf.save('web.pdf');
     });
}
