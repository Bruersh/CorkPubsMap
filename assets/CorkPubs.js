
function ConstructGeoJSON(map_obj, ReviewPanel) {
    let CorkPubs = null;
    
    let pointToLayer = (feature, latlng) => {
        var id = 0;
        if (feature.properties.rating >= 4.7)  id = 3; 
        else if (feature.properties.rating >= 4.4) id = 2; 
        else if (feature.properties.rating >= 4.0) id = 1;
        else if (feature.properties.rating <= 4.0) id = 0; 

        return L.marker(latlng, {
            icon: L.divIcon({
                className: 'fa-solid fa-glass-water marker-color-' + (id + 1)
            })
        })
    }
   
    let onEachFeature = (feature, layer) => {
        var rating = `
            <b> 
                ${feature.properties.name} 
                <br />
                ★ ${feature.properties.rating} ★
            </b>
        `
        layer.bindTooltip(rating);

        //Add listener for map interaction
        function mouseoverEventListener(e) {

        }
        
        function mouseoutEventListener(e) {
            //ReviewPanel.update();
        }
        
        function onClick(e) {
            //Update the reviews on the panel
            ReviewPanel.update(layer.feature.properties);

            //quick ref to properties
            let props = layer.feature.properties;

            //half a side length
            let radius = 0.001
            
            //Bound corners
            var corner1 = L.latLng(props.lat - radius, props.long - radius);
            var corner2 = L.latLng(props.lat + radius, props.long + radius);
            
            //Bounds
            bounds = L.latLngBounds(corner1, corner2);
            map_obj.fitBounds(bounds);
        }
        layer.on({
            mouseover: mouseoverEventListener, 
            mouseout: mouseoutEventListener,
            click: onClick
        });
    }
    
    //Load data on pubs in Cork, Ireland
    CorkPubs = L.geoJson.ajax("assets/CorkPubs.geojson",{
        attribution: 'Cork Pubs Dataset &copy; Shea Bruer | Custom Mapbox Base Map | Map Author: Shea Bruer',
        pointToLayer,
        onEachFeature,
    });
    //Add the data to the map
    CorkPubs.addTo(map_obj);    
}