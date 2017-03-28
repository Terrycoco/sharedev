import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import sizing from 'styles/sizing';
import L from 'leaflet';

require('./maps.scss');

let map, myLayer;



class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWalkId: null
    };
    this.updateLayers = this.updateLayers.bind(this);
    this.sizeMap = this.sizeMap.bind(this);
  }

  componentDidMount() {

     //init map 
     map = L.map('map').fitWorld();

     //add tile layer
     var KartoLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

     //geolocate
     // map.locate({setView: true, maxZoom: 16});



    this.updateLayers();

    map.setView(myLayer.getBounds().getCenter(), 13);

    map.on('popupopen', function(e) {
      var source = e.popup._source;
      var feature = e.popup._source.feature;
    });
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
                var btn = document.getElementById('goToSummary').click();
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

  sizeMap() {
    if (this.props.browser.lessThan.medium) {
      return {width: this.props.browser.width, height: this.props.browser.height - sizing.header.sm};
    } else {
      return {width: this.props.browser.width * .49, height: this.props.browser.height - sizing.header.md};
    }
  }

  render() {
    let style = this.sizeMap();
    return (
        <div id="map" className="map-container" style={style} >
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    here: state.geo.here,
    features: state.walks.walks.features,
    browser: state.browser
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

