import React, {Component} from 'react';
import L from 'leaflet';
require ('utils/map/polyline.snakeanim');
import {connect} from 'react-redux';
import {getRoute} from 'actions/walkActions';
import sizing from 'styles/sizing';





const greenIcon = L.icon({
  iconUrl: require('images/marker-icon-green.png'),
  iconSize:     [25, 41], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [12.5, 41], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const redCir = {
  color: 'red',
  fillColor: 'red',
  fillOpacity: 1,
};

const stopCir = {
  color: '#128ba1',
  fillColor: '#128ba1',
  fillOpacity: 1,
};

const greenCir = {
  color: 'green',
  fillColor: 'green',
  fillOpacity: 1,
};

let map;
let circles = {};
let currentLayer;
let latlngs;

class SnakeMap extends Component {
   constructor(props) {
    super(props);
    this.updateRoute = this.updateRoute.bind(this);
    this.updateStops = this.updateStops.bind(this);
    this.highlightCurrentStop = this.highlightCurrentStop.bind(this);
    //default height and width for small screens
    this.state = {
      width: sizing.form.maxWidth - sizing.form.padding, //form width less padding
      height: 250
    };
   }

   componentDidMount() {
    //init map
     map = new L.map('snakemap',{zoomControl: false}).setView([42.3575, -71.0635], 15);

     //add tile layer
     var KartoLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

     currentLayer = new L.LayerGroup().addTo(map); //layer for current stop marker
     this.updateRoute();
     this.updateStops();
     this.highlightCurrentStop();
     map.scrollWheelZoom.disable();
     // map.dragging.disable();
     map.touchZoom.disable();
     map.doubleClickZoom.disable();
     map.boxZoom.disable();
     map.keyboard.disable();
     // map.tap.disable();
    }



    componentDidUpdate() {
     map.invalidateSize();
     this.updateRoute();
     this.updateStops();

     // this.highlightCurrentStop();
    }

    componentWillUnmount() {
      map = null;
    }

    updateStops() {
     if (this.props.stops.length > 0) {
      const stops = this.props.stops;
      for (var i = 0, len = stops.length; i < len; i++) {
        switch (stops[i].sort) {
          case 0:
            L.circle(new L.LatLng(stops[i].lat, stops[i].lng), 12, greenCir).addTo(map);
            break;
          case stops.length - 1:
            L.circle(new L.LatLng(stops[i].lat, stops[i].lng), 12, redCir).addTo(map);
            break;
          default:
            L.circle(new L.LatLng(stops[i].lat, stops[i].lng), 12, stopCir).addTo(map);
        }
      } // end for
 
   


    } //end if
     
     } //end update

     highlightCurrentStop() {
      if (this.props.stops.length > 0) {
        currentLayer.clearLayers();
        let stop = this.props.stops[this.props.selectedStopIdx];
        let marker = L.marker([stop.lat, stop.lng], {icon: greenIcon}).addTo(currentLayer);
        map.panTo([stop.lat, stop.lng]);
     }
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

         //make leaflet polyline out of them
         let line = L.polyline(latlngs);
         line.addTo(map);
         map.fitBounds(L.latLngBounds(latlngs));
         


         
         function snake() {
           line.snakeIn();
         }

         line.on('snakestart snake snakeend', function(ev) {
           if (ev.type == 'snakeend') {
              snake(); //start over
           }
         });

         snake();


     }
   }


   render() {
    let style;
    if (this.props.browser.lessThan.medium) {
      style = { height: this.state.height, width: this.props.width - sizing.form.padding};
    } else {
      style = { height: this.state.height, width: sizing.form.maxWidth - sizing.form.padding};
    }

    return (
       <div id="snakemap" style={style}></div>
    );
   }

}

function mapStateToProps(state) {
  console.log('browser: ', state.browser);
  return {
    walkId: state.walks.selectedWalk.id,
    route: state.walks.selectedWalk.route, 
    stops: state.walks.selectedWalk.stops,
    selectedStopIdx: state.walks.selectedWalk.selectedStopIdx,
    browser: state.browser,
    width: state.browser.width,
    height: state.browser.height
  };
}


export default connect(mapStateToProps)(SnakeMap);


// const circleOptions = {
//   radius: 5,
//   // stroke  //Boolean true  Whether to draw stroke along the path. Set it to false to disable borders on polygons or circles.
//   // color //String  '#03f'  Stroke color.
//   // weight  //Number  5 Stroke width in pixels.
//   // opacity //Number  0.5 Stroke opacity.
//   fill: true  //Boolean depends Whether to fill the path with color. Set it to false to disable filling on polygons or circles.
//   // fillColor //string  same as color Fill color.
//   // fillOpacity //Number  0.2 Fill opacity.
//   // fillRule  //String  'evenodd' A string that defines how the inside of a shape is determined.
//   // dashArray //String  null  A string that defines the stroke dash pattern. Doesn't work on canvas-powered layers (e.g. Android 2).
//   // lineCap //String  null  A string that defines shape to be used at the end of the stroke.
//   // lineJoin  //String  null  A string that defines shape to be used at the corners of the stroke.
//   // clickable //Boolean true  If false, the vector will not emit mouse events and will act as a part of the underlying map.
//   // pointerEvents //String  null  Sets the pointer-events attribute on the path if SVG backend is used.
//   // className //string  ''  Custom class name set on an element.
// };




         //  var popup = L.popup()
         //    .setLatLng([stop.lat, stop.lng])
         //    .setContent(stop.pt_title)
         //    .openOn(map);
         // }