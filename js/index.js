// Map initialization
var map = L.map("map", {
  center: [-1.5018692, 29.6112269],
  zoom: 18,
});
console.log(map)
// map.flyTo([-1.5018692, 29.6112269], 30)
//  Satellite view
let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let streets = L.tileLayer(
  "https://www.openstreetmap.org/#map=19/-1.50180/29.61068"
).addTo(map);
let satellite = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    maxZoom: 40,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
let Terrain = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}", {
  maxZoom: 40,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
});
let Hybrid = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
  {
    maxZoom: 40,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);


// layerControl.addOverlay(basemapControl1, classes).addTo(map);

// leaflet Routing

// adding shapefiles


var LeafIcon = L.Icon.extend({
  options: {
    iconSize: [35, 45],
    shadowSize: [50, 64],
    iconAnchor: [12, 41],
    shadowAnchor: [4, 62],
    popupAnchor: [0, -41],
  },
});
var greenIcon = new LeafIcon({ iconUrl: "icon1.jpg" });

// var my = new L.Shapefile("Eve.zip", {
//   style: function (feature) {
//     return { color: "black", weight: 2};

//   },
//   onEachFeature: function (feature, layer) {
//     if(feature.properties.Floor === 1 ){
//             // var { lat, lng } = layer.getBounds().getCenter();
//         L.Marker.prototype.options.icon = L.icon({
//       iconSize:     [20, 20],
//       shadowSize:   [50, 64],
//       iconAnchor:   [12, 41],
//       shadowAnchor: [4, 62],
//       popupAnchor:  [0, -41],
//       iconUrl: 'icon.png'
//     })
//     }
//     if(feature.properties.Floor === 2 ){
//       // var { lat, lng } = layer.getBounds().getCenter();
//   L.Marker.prototype.options.icon = L.icon({
// iconSize:     [10, 10],
// shadowSize:   [50, 64],
// iconAnchor:   [12, 41],
// shadowAnchor: [4, 62],
// popupAnchor:  [0, -41],
// iconUrl: 'icon8.png'
// })
// }
//     layer.bindPopup(
//       `<div><strong>Area</strong>: ${feature.properties.SHAPE_Area} sqm</div>
//        <div><strong>Name</strong>: ${feature.properties.Name}</div>
//        <div><strong>Floor</strong>: ${feature.properties.Floor}</div>
//        <div><strong>Name_1</strong>: ${feature.properties.Name_1}</div>
//       `
//     );
//   },
// });
// my.addTo(map);

// var Class = new L.Shapefile("INES_Buildings.zip", {
//   style: function (feature) {
//     return { color: "black", weight: 2};
//   },
//   onEachFeature: function (feature, layer) {
//     // if (parcels_on_sale.includes(feature.properties.upi)){
//     //   // L.marker([feature.properties.x,  feature.properties.y]).addTo(map)
//     // }
//     // console.log(feature);
//     layer.bindPopup(
//       `<div><strong>Area</strong>: ${feature.properties.SHAPE_Area} sqm</div>
//        <div><strong>Name</strong>: ${feature.properties.Name}</div>
//       `
//     );
//   },
// });
// shp1.addTo(map);

var floor1 = new L.Shapefile("html pages/GF.zip", {
  style: function (feature) {
    return { color: "orange", icon: greenIcon};
  },
  onEachFeature: function (feature, layer) {
    // L.Marker.prototype.options.icon = L.icon({
    //   iconSize: [10, 10],
    //   shadowSize: [50, 64],
    //   iconAnchor: [12, 41],
    //   shadowAnchor: [4, 62],
    //   popupAnchor: [0, -41],
    //   iconUrl: "icon.png",
    // });
    layer.bindPopup(
      `<div><img src="/Ines-logo.PNG"></div>
       <div><strong>Name</strong>: ${feature.properties.Name}</div>
       <div><strong>Floor</strong>: ${feature.properties.Floor}</div> 
     `
    );
  },
});
// floor1.addTo(map);
// console.log(floor1);
var floor2 = new L.Shapefile("html pages/First floor.zip", {
  style: function (feature) {
    return { color: "green", weight: 2};
  },
  onEachFeature: function (feature, layer) {
    // L.Marker.prototype.options.icon = L.icon({
    //   iconSize: [20, 20],
    //   shadowSize: [50, 64],
    //   iconAnchor: [12, 41],
    //   shadowAnchor: [4, 62],
    //   popupAnchor: [0, -41],
    //   iconUrl: "icon1.png",
    // });
    layer.bindPopup(
        `<div><img src="Ines-logo.PNG"></div>
         <div><strong>Name</strong>: ${feature.properties.Name}</div>
         <div><strong>Floor</strong>: ${feature.properties.Floor}</div> 
        `
    );
  },
});
var routes = new L.Shapefile("html pages/Paths.zip", {
  style: function (feature) {
    // return { color: yellow, weight: 1};
  },
  onEachFeature: function (feature, layer) {
    // L.Marker.prototype.options.icon = L.icon({
    //   iconSize: [10, 10],
    //   shadowSize: [50, 64],
    //   iconAnchor: [12, 41],
    //   shadowAnchor: [4, 62],
    //   popupAnchor: [0, -41],
    //   iconUrl: "icon.png",
    // });
    layer.bindPopup(
      `<div> <img src="Ines-logo.PNG" ></div>
       <div>Road</div>
     `
    );
  },
});
// routes.addTo(map);

// creating  an object to hold layer names as you want them to appear in the basemap switcher list
let basemapControl1 = {
  Streets: streets,
  Satellite: satellite,
  Terrain: Terrain,
  Hybrid: Hybrid,
  Osm: osm,
};
var classes = {
  Ground_Floor: L.featureGroup([floor1]),
  First_Floor: L.featureGroup([floor2]),
  Paths: L.featureGroup([routes])
};
new L.control.layers(basemapControl1, classes).addTo(map);


// geolocate
L.control.locate({ setView: "always" }).addTo(map);

//  GEOCODING             -----------------------------------------------------------------------------------

var searchControl = new L.Control.Search({
  position: "topright",
  textPlaceholder: "Search class",
  propertyName: "Name",
  layer: L.featureGroup([floor1, floor2]),
  moveToLocation: function (latlng, title, map) {
    // map.fitBounds( latlng.layer.getBounds() );
    // var zoom = map.getBoundsZoom(latlng.layer.getBounds());
    map.setView(latlng, 22); // access the zoom

   console.log(latlng);
  },
}).addTo(map);
//inizialize search control
searchControl
  .on("search:locationfound", function (e) {

    if (e.layer._popup) e.layer.openPopup();
  })
  // .on("search:collapsed", function (e) {
  //   featuresLayer.eachLayer(function (layer) {
  //     //restore feature color
  //     featuresLayer.resetStyle(layer);
  //   });
  // });
map.addControl(searchControl);

//  leaflet legend
L.LegendControl = L.Control.extend({
  options: {
    position: "bottomright",
  },
  style: function (feature) {
    return {
      weight: 1.5,
      opacity: 1,
      fillOpacity: 1,
      radius: 6,
      fillColor: getColor(feature.properties.TypeOfIssue),
      color: "grey",
    };
  },
  onAdd: function (map) {
    var div = L.DomUtil.create("div", "info legend");
    (labels = ["<strong>Legend</strong>"]),
      (categories = [
        {
          text: "Ground floor",
          color: "#fa591a",
        },
        {
          text: "Second floor",
          color: "#19571f",
        },
      ]);
    categories.forEach((category, i) => {
      div.innerHTML += labels.push(
        '<i style="background:' + category.color + '"></i> ' + category.text
      );
    });
    div.innerHTML = labels.join("<br>");
    return div;
  },
});

map.addControl(new L.LegendControl({ position: "bottomright" }));
let getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      setTimeout(() => resolve(position.coords), 1000);
    });
  });

getPosition()
  .then((currentLocation) => {
    L.Routing.control({
      waypoints: [
        L.latLng(currentLocation["latitude"], currentLocation["longitude"]),
        L.latLng(-1.5015165798618832, 29.609806088574125),
      ],
      zoom: false,
      addWaypoints: true,
      routeWhileDragging: true,
      draggableWaypoints : true,
      provider: "osrm",
    }).addTo(map);
  })
  .catch((error) => {
    console.log("error.....", error);
  });
