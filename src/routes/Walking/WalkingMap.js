import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {myColors} from 'styles/theme';

var LabeledMarker = require('leaflet-labeled-circle');
require('../../components/Maps/lib/L.Icon.Pulse.js');
require('../../components/Maps/lib/L.Icon.Pulse.scss');

let map, hereLayer;

const stopCir = {
  color: '#128ba1',
  fillColor: '#128ba1',
  fillOpacity: 1,
};

const pulsingIcon = L.icon.pulse({
  iconSize: [12,12], 
  color: myColors.orange,
  heartbeat: 3
});

const markerOptions = {
  // all L.CircleMarker options + following: 
  textStyle: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Helvetica, Arial, sans-serif'
  },
  shiftY: 6 // to compensate vertical margin, SVG rect is not accurate 
};

class WalkingMap extends Component {
  constructor(props) {
    super(props);
    this.updateRoute = this.updateRoute.bind(this);
    this.updateMarkers = this.updateMarkers.bind(this);
    this.updateStops = this.updateStops.bind(this);
  }




  componentDidMount() {
     //what to do when user is not near start?
     //init map 
     // map = L.map('map', {doubleClickZoom: false}).locate({setView: true, maxZoom: 20});
     //  function onLocationFound(e) {
     //  let hereMarker = L.marker(e.latlng, {icon: pulsingIcon}).addTo(map);
     // }

     //  map.on('locationfound', onLocationFound);

     let lat = this.props.selectedWalk.lat;
     let lng = this.props.selectedWalk.lng;

     map = L.map('walkingmap').setView([lat, lng], 15);
     hereLayer = new L.LayerGroup().addTo(map); //layer for current stop marker

     //add tile layer
     var KartoLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);


     this.updateRoute();
     this.updateStops();
     this.updateMarkers();

   } //end componentDidMount
    
    componentDidUpdate() {
        this.updateMarkers();
    }
    updateMarkers() {
      if (this.props.manCoords) {
       hereLayer.clearLayers();
       let hereMarker = L.marker(this.props.manCoords, {icon: pulsingIcon}).addTo(hereLayer);
       map.panTo([this.props.manCoords.lat, this.props.manCoords.lng]);
     }
    }
    updateStops() {
     if (this.props.stops.length > 0) {
      const stops = this.props.stops;
      for (var i = 0, len = stops.length; i < len; i++) {
        L.circle(new L.LatLng(stops[i].lat, stops[i].lng), 12, stopCir).addTo(map);
      } // end for
    } //end if
     } //end update
    updateRoute() {
       if (this.props.route.length > 0) {
         const legs = this.props.route;
         let latlngs = [];
          //convert route data to Leaflet objects 
         for (var i = 0, len = legs.length; i < len; i++) {
           for (var m = 0, mlen = legs[i].maneuvers.length; m < mlen; m++) {
              latlngs.push(new L.LatLng(legs[i].maneuvers[m].startPoint.lat, legs[i].maneuvers[m].startPoint.lng));
           }
         }
   
         //make leaflet dashed polyline out of them
         let line = L.polyline(latlngs, {
            color: '#128ba1',
            weight: 3,
            opacity: .7,
            dashArray: '10,7',
            lineJoin: 'round'
         });
         map.fitBounds(L.latLngBounds(latlngs));
         line.addTo(map);


    }
  }


  componentWillUnmount() {
    hereLayer = null;
    map = null;
  }

  render() {
    return (
        <div id="walkingmap" >
        </div>
    );
  }
}

function mapStateToProps(state) {
  let manCoords = null;
  let selectedWalk = state.walks.selectedWalk;
  let manIdx = selectedWalk.selectedManeuverIdx;
  if (selectedWalk.selectedStopIdx < selectedWalk.route.length) {
    manCoords = selectedWalk.route[selectedWalk.selectedStopIdx].maneuvers[manIdx].startPoint;
  }
  return {
    selectedWalk: selectedWalk,
    route: selectedWalk.route, 
    stops: selectedWalk.stops,
    currentStopIdx: selectedWalk.selectedStopIdx,
    manIdx: manIdx,
    manCoords: manCoords
  };
}

export default connect(mapStateToProps, actions)(WalkingMap);