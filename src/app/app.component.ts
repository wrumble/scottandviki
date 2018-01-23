import {Component, OnInit, ViewChild, EventEmitter, Inject, AfterViewInit} from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  modalActions = new EventEmitter<string|MaterializeAction>();

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  ngOnInit() {
    var mapProp = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
  }

  ngAfterViewInit() {
    $(document).ready(function() {
        google.maps.event.addListener(map, "idle", function(){
            google.maps.event.trigger(map, 'resize');
        });
    });
  }
}
