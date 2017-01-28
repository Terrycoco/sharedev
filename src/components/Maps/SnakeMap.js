import React, {Component} from 'react';
require ('utils/map/polyline.snakeanim');
require('./maps.scss');
import {connect} from 'react-redux';


let map;

class SnakeMap extends Component {
   constructor(props) {
    super(props);
    this.updateRoute = this.updateRoute.bind(this);
   }

   componentDidMount() {
    //init map
     map = L.map('snakemap').setView([42.3575, -71.0635], 15);

     //add tile layer
     var KartoLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
     
     this.updateRoute();
    }

    componentDidUpdate() {
      this.updateRoute();
     }

    componentWillUnmount() {
      map = null;
    }

     updateRoute() {
       if (this.props.route.length > 0) {
         const route = this.props.route;
          //convert route data to Leaflet objects (in data lng is first)
         for (var i = 0, latlngs = [], len = route.length; i < len; i++) {
           latlngs.push(new L.LatLng(route[i][1], route[i][0]));
         }

         //make leaflet polyline out of them
         var path = L.polyline(latlngs);

         //fit onto map
         map.fitBounds(L.latLngBounds(latlngs));
         //add start and end markers
         map.addLayer(L.marker(latlngs[0])); 
         map.addLayer(L.marker(latlngs[len - 1]));

         map.addLayer(path);
         
         function snake() {
           path.snakeIn();
         }

         path.on('snakestart snake snakeend', function(ev) {
           if (ev.type == 'snakeend') {

              snake(); //start over
           }
         });

         snake();
     }
   }
   render() {
    console.log('this.props.route.length:', this.props.route.length);
    return (
       <div id="snakemap"></div>
    );
   }

}

function mapStateToProps(state) {
  return {
    walkId: state.search.selectedWalk.id,
    route: state.search.selectedWalk.route.coordinates
  };
}


export default connect(mapStateToProps)(SnakeMap);