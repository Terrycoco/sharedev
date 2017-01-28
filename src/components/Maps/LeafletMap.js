import React, {Component} from 'react';
import PageBar from 'components/PageBar';
import Loader from 'components/Loader';
import {connect} from 'react-redux';
import {box2Bounds} from 'utils/geo';
import * as actions from 'actions';
import {browserHistory} from 'react-router';
import data from 'utils/data/geoJson.json';

require('./maps.scss');

let map, myLayer;



class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWalkId: null
    };
    this.updateLayers = this.updateLayers.bind(this);
  }

  componentDidMount() {

     //init map //TODO change default center
     map = L.map('map').setView([42.3575, -71.0635], 15);

     //add tile layer
     var KartoLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

    map.on('popupopen', function(e) {
      var source = e.popup._source;
      console.log('source: ', source);
      var feature = e.popup._source.feature;
      console.log('feature: ', feature);
    });

    this.updateLayers();
  }

  componentDidUpdate() {
    this.updateLayers();
  }
    
  updateLayers() {
    let features = this.props.features;

    // map.removeLayer(myLayer);

    //marker styles
    var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
  
    myLayer = L.geoJSON(features, {
        //only points here
        filter: function(feature, layer) {
          return (feature.geometry.type == "Point");
        },
         //make each point a circle
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, geojsonMarkerOptions);
        },
        onEachFeature: function(feature, layer) {

            var popupId = 'info' + feature.properties.id;

            var domElem = document.createElement('div');
              domElem.id = popupId;
              var newContent = document.createTextNode(feature.properties.title); 
              domElem.appendChild(newContent); //add the text node to the newly created div. 
              domElem.onclick = function() {
                var target = document.getElementById('walkId');
                target.value = feature.properties.id;
                var btn = document.getElementById('goToDetails').click();
              }

            //create layer
            layer.bindPopup(domElem);

        }


    });
    myLayer.addTo(map);
  }

  componentWillUnmount() {
    myLayer = null;
    map = null;
  }

  render() {
    return (
        <div id="map" className="map-container" >
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    here: state.geo.here,
    features: state.search.walks.features
  };

}

export default connect(mapStateToProps, actions)(LeafletMap);

//-----------------------------


// function onEachFeature(feature, layer) {
//     // does this feature have a property named start_pt?
//     if (feature.properties && feature.properties.start_pt) {
//         layer.bindPopup(feature.properties.title);
//     }
// }

