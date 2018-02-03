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

        openChurchMap() {
          this.openDirectionsMap();
          var mapProp = {
                center: new google.maps.LatLng(51.103976, 0.255515),
                zoom: 11,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: true,
                mapTypeControlOptions: {
                  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                  mapTypeIds: ['roadmap', 'terrain']
                }
            };
          var map = new google.maps.Map(document.getElementById("church-map"), mapProp);
          let churchLL = new google.maps.LatLng(51.020624, 0.2604413);
          let churchMarker = new google.maps.Marker({
                 draggable: true,
                 animation: google.maps.Animation.DROP,
                   position: churchLL,
                   icon: "",
                   label: "St Dunstan's Church",
                   map: map,
          });
          let farmLL = new google.maps.LatLng(51.1728154, 0.2218346);
          let farmMarker = new google.maps.Marker({
                 draggable: true,
                 animation: google.maps.Animation.DROP,
                   position: farmLL,
                   icon: "",
                   label: "Juddwood Farm",
                   map: map,
          });
        }

        openDirectionsMap() {
          var directionsDisplay = new google.maps.DirectionsRenderer();
          var mapCenter = new google.maps.LatLng(51.0965176, 0.1021581);
          var mapOptions =
                  {
                      zoom: 11,
                      center: mapCenter,
                      mapTypeId: google.maps.MapTypeId.ROADMAP,
                  };
          var map = new google.maps.Map(document.getElementById("directions-map"), mapOptions);
          let center = new google.maps.LatLng(51.0207156, 0.260662);
          directionsDisplay.setMap(map);

          var directionsService = new google.maps.DirectionsService();
          var start = new google.maps.LatLng(51.0965176, 0.1021581);
          var end = new google.maps.LatLng(51.020624, 0.2604413);
          var request = {
              origin: start,
              destination: end,
              travelMode: google.maps.TravelMode.DRIVING
          };
          directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
            }
          });
        }

        printMapModal() {
          var content = window.document.getElementById("map-modal");
          var newWindow = window.open();
          newWindow.document.write(content.innerHTML);
          newWindow.print();
        }
      }
