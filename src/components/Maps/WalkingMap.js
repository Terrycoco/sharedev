import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';


var LabeledMarker = require('leaflet-labeled-circle');

require('./maps.scss');

let map, myLayer;

let markerOptions = {
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
    this.state = {
      selectedWalkId: null
    };
   this.updateRoute = this.updateRoute.bind(this);
  }

  componentDidMount() {

     //init map 
     map = L.map('map').fitWorld();
     map.options.maxZoom = 20;
     
     //add tile layer
     var KartoLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

    //  //add markers
    //  let stops = [];
    //  this.props.stops.map((stop, idx) => {
    //   switch (stop.sort) {
    //     case 0:
    //       break;
    //     default:
    //       //headsup! in geoJson the lng comes first!!
    //       var feature = {
    //         "type": "Feature",
    //         "properties": {
    //           "text": stop.sort.toString(),
    //           "labelPosition": [stop.lng, stop.lat]
    //         },
    //         "geometry": {
    //           "type": "Point",
    //           "coordinates": [stop.lng, stop.lat]
    //         }
    //       };
    //       //in leaflet lat comes first fml
    //       var marker = new LabeledMarker(
    //         L.latLng(stop.lat, stop.lng), 
    //         feature, {
    //           markerOptions: { 
    //             color: '#050'
    //           }
    //         });
    //         stops.push(marker);
    //   } //end switch


    // });  //end stop. map
     
    //  var group = new L.featureGroup(stops).addTo(map);
    //  this.updateRoute();


   } //end componentDidMount
    

    updateRoute() {
       if (this.props.route.length > 0) {
         const route = this.props.route;
          //convert route data to Leaflet objects (in data lng is first)
         for (var i = 0, latlngs = [], len = route.length; i < len; i++) {
           latlngs.push(new L.LatLng(route[i][1], route[i][0]));
         }

         //make leaflet dashed polyline out of them
         var path = L.polyline(latlngs, {
            color: '#050',
            weight: 3,
            opacity: .7,
            dashArray: '10,7',
            lineJoin: 'round'
         });

         //fit onto map
         map.fitBounds(L.latLngBounds(latlngs));
         //add start and end markers
         // map.addLayer(L.marker(latlngs[0])); 
         // map.addLayer(L.marker(latlngs[len - 1]));

         map.addLayer(path);
    }
  }


  componentWillUnmount() {
    myLayer = null;
    map = null;
  }

  render() {
    return (
      <div>

        <div id="map" className="map-container" >
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.search.selectedWalk.route.coordinates,
    stops: state.search.selectedWalk.stops
  };

}

export default connect(mapStateToProps, actions)(WalkingMap);