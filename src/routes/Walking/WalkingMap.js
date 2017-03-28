import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {myColors} from 'styles/theme';
import sizing from 'styles/sizing';
import L from 'leaflet';

var LabeledMarker = require('leaflet-labeled-circle');
require('../../components/Maps/lib/L.Icon.Pulse.js');
require('../../components/Maps/lib/L.Icon.Pulse.scss');


//offset functions
L.Map.prototype.panToOffset = function (latlng, offset, options) {
 var x = this.latLngToContainerPoint(latlng).x - offset[0]
 var y = this.latLngToContainerPoint(latlng).y - offset[1]
 var point = this.containerPointToLatLng([x, y])
 return this.setView(point, this._zoom, { pan: options })
}

L.Map.prototype.setViewOffset = function (latlng, offset, targetZoom) {
  var targetPoint = this.project(latlng, targetZoom).subtract(offset),
  targetLatLng = this.unproject(targetPoint, targetZoom);
  return this.setView(targetLatLng, targetZoom);
}

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

let map, hereLayer, latlngs;
let stopMarkers = [];


class WalkingMap extends Component {
  constructor(props) {
    super(props);
    this.updateRoute = this.updateRoute.bind(this);
    this.updateCurrentMarker = this.updateCurrentMarker.bind(this);
    this.updateStops = this.updateStops.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.state = {
      //default small
      height: props.browser.height - (sizing.header.sm + sizing.footer.sm),
      width: props.browser.width
    };
  }

  openPopup(props) {
    if (stopMarkers.length > 0) {
      stopMarkers[props.currentStopIdx].openPopup();
    }
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
     //default view is start of walk
     let start = [lat, lng];
     map = L.map('walkingmap').setView([51.505, -0.09], 13);


     //add tile layers
     var KartoLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      
     hereLayer = new L.LayerGroup().addTo(map); //layer for current stop marker
     this.updateSize(this.props);
     this.updateRoute();  //set the route
     this.updateStops(this.openPopup);  //set the dots then open current Stop
     this.updateCurrentMarker(); //you are here
   } //end componentDidMount

    componentWillReceiveProps(nextProps) {
      if (this.state.height != nextProps.height || this.state.width != nextProps.width) {
        this.updateSize(nextProps);
      }

      if (nextProps.currentStopIdx != this.props.currentStopIdx) {
        this.openPopup(nextProps);
      }
    }
    
    componentDidUpdate() {
      this.updateCurrentMarker();
    }

    updateRoute() {
       if (this.props.route.length > 0) {
         const legs = this.props.route;
         latlngs = [];
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

         line.addTo(map);
         map.fitBounds(L.latLngBounds(latlngs));
       }
    }

    updateSize(props) {
      //just sets state
       let size = (props.browser.lessThan.medium ? 'sm' : 'md');
       let wd = (size == 'sm' ? props.width : props.width * .49);
       let ht = props.height - sizing.header[size] - sizing.footer[size];
       this.setState({height: ht, width: wd});
    }

    updateCurrentMarker() {
      if (map && this.props.manCoords) {
       hereLayer.clearLayers();
       let hereMarker = L.marker(this.props.manCoords, {icon: pulsingIcon}).addTo(hereLayer);
       map.panTo(hereMarker.getLatLng());
     }
    }

    updateStops(cb) {
     if (this.props.stops.length > 0) {
      stopMarkers = [];
      const stops = this.props.stops;
      for (var i = 0, len = stops.length; i < len; i++) {
        stopMarkers[i] = L.circle(new L.LatLng(stops[i].lat, stops[i].lng), 12, stopCir).addTo(map);
        stopMarkers[i].bindPopup(stops[i].pt_title); //works
        cb(this.props);
      } // end for
     } //end if
    } //end update stops


  componentWillUnmount() {
    hereLayer = null;
    map = null;
    latlngs = null;
  }

  render() {
    return (
      <div id="walkingmap" style={{height: this.state.height, width: this.state.width}}>
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
    manCoords: manCoords,
    browser: state.browser,
    height: state.browser.height,
    width: state.browser.width
  };
}

export default connect(mapStateToProps, actions)(WalkingMap);