
//Add a legend
function ConstructRatingLegend(map_obj) {
    var legend = L.control({ position: 'topright' });
    
    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'legend');
        div.innerHTML = `
            <b>Overall Rating</b> <br />
            <i style="background: ${colors[3]}; opacity: 0.8"></i><p><b>4.7 + ★</b></p>
            <i style="background: ${colors[2]}; opacity: 0.8"></i><p><b>4.4 - 4.7 ★</b></p>
            <i style="background: ${colors[1]}; opacity: 0.8"></i><p><b>4.0 - 4.4 ★</b></p>
            <i style="background: ${colors[0]}; opacity: 0.8"></i><p><b>< 4.0 ★</b></p>
        `
        return div;
    };    

    legend.addTo(map_obj);
}
