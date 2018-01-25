import {Component, OnInit, ViewChild, EventEmitter, Inject} from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'app';

  modalActions = new EventEmitter<string|MaterializeAction>();

  ngOnInit() {}

  openMap() {
    var mapProp = {
          center: new google.maps.LatLng(51.0207156, 0.260662),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ['roadmap', 'terrain']
          }
      };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
    let myLatlng = new google.maps.LatLng(51.0207156, 0.260662);
    let marker = new google.maps.Marker({
           draggable: true,
           animation: google.maps.Animation.DROP,
             position: myLatlng,
             icon: "",
             label: "St Dunstan's Church",
             map: map,
    });
  }
}
