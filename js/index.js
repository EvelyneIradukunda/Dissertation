    // Map initialization
    var map = L.map("map",
    {
        center:[-1.5018692, 29.6112269],
        zoom: 18,
 });
//  Satellite view
// let satellite = L.tileLayer(
//   "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
//   {
//     maxZoom: 20,
//     subdomains: ["mt0", "mt1", "mt2", "mt3"],
//   });

// osm layer
L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
        maxZoom: 22,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }).addTo(map);
L.marker([-1.5018692, 29.6112269]).addTo(map)
.bindPopup('INES RUHENGERI.')
.openPopup();

L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

let streets = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  ).addTo(map);

let Terrain = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
});
let Hybrid = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s,h&x={}x&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  });

// creating  an object to hold layer names as you want them to appear in the basemap switcher list
let basemapControl = {
  Satellite: satellite,
  Streets: streets,
  Terrain: Terrain,
  Hybrid: Hybrid,
};

new L.control.layers(basemapControl).addTo(map);

// geolocate
L.control.locate({setView: "always"}).addTo(map);

// // Router
// let getPosition = () =>
//   new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       setTimeout(() => resolve(position.coords), 1000);
//     });
//   });

// getPosition()
//   .then((currentLocation) => {
//     L.Routing.control({
//       waypoints: [
//         L.latLng(currentLocation["latitude"], currentLocation["longitude"]),
//         L.latLng(-1.509222150194586, 29.64227209991241),
//       ],
//     }).addTo(map);
//   })
//   .catch((error) => {
//     console.log("error.....", error);
//   });

//   // Remove underline
//   <Link to="first" style={{ textDecoration: 'none' }}>
//   <MenuItem style={{ paddingLeft: 13 }}>Team 1</MenuItem>
// </Link>

L.Routing.control({
  waypoints: [
    L.latLng(57.74, 11.94),
    L.latLng(57.6792, 11.949)
  ]
}).addTo(map);
