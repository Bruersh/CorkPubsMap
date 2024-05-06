// Add color classes to page header
var colors = chroma.scale('Oranges').mode('lch').colors(5);
let colorStyling = ""
for (i = 0; i < colors.length; i++) {
    colorStyling += `
        .marker-color-${(i + 1)} { 
            color: ${colors[i]}; 
            font-size: 15px; 
            text-shadow: 0 0 0px #ffffff;
        } 
    `
}
$('head').append($(`<style> ${colorStyling} </style>`));


// Main Setup 
let mymap = ConstructLeafletMap();
let ReviewPanel = ConstructReviewPanel(mymap);
ConstructGeoJSON(mymap, ReviewPanel);
ConstructRatingLegend(mymap)


function ConstructLeafletMap() {
    var map_obj = L.map('map', {
        center:[51.89832724554784, -8.473491797793262], //centered on Cork
        zoom: 14.5,
        maxZoom: 18,
        minZoom: 1,
        detectRetina: true,
    });
    
    //Tilemap
    const TilemapURL = 'https://api.mapbox.com/styles/v1/bruersh/clvdvvqxl01x301phdzrv45pv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJ1ZXJzaCIsImEiOiJjbHU3NGI1OGswMjVtMmtvajR4N2EzbXV1In0.57h-WWEL0ulj_ywXWyRgVQ';
    L.tileLayer(TilemapURL).addTo(map_obj)
    
    //Scale bar
    L.control.scale({ position: 'bottomleft' }).addTo(map_obj);
    return map_obj;
}
