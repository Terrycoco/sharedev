//conversion service to geoJSON

// { "type": "FeatureCollection",
//     "features": [
//       { "type": "Feature",
//         "geometry": {"type": "Point", "coordinates": [-117.85320, 33.78834]},
//         "properties": {"title": "Walk Title",
//                        "descr": "I am a walk found here"}
//       },
//       { "type": "Feature",
//         "geometry": {"type": "Point", "coordinates": [-117.85310, 33.78833]},
//         "properties": {"title": "Another Walk Title",
//                        "descr": "I am another walk found here"}
//       }
//     ]
// }

export function walksToGeoJson(queryResult) {
  let i = 0;
  let json = {
    type: "FeatureCollection",
    features: []
  };

  for (i=0; i< queryResult.length; i++) {
    //create a feature
    let feature = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [row.lng, row.lat]
      },
      properties: {}
    };

    //add each property from queries to feature
    for(prop in queryResult[i]) {
        if ((prop !== "lat" || prop != "lng") && queryResult[i].hasOwnProperty(prop)) {
          feature.properties[prop] = queryResult[i][prop];
        }
    }
     
     //push feature onto main object
     json.features.push(feature);
  } //end loop

return json;
}