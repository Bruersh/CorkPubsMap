
//Add section that adds Reviews best and worst
function ConstructReviewPanel(map_obj) {

    var panel = L.control({position: 'bottomright'});
    
    panel.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'panel');
        this.update();
        return this._div;
    }; 
    
    panel.update = function (props) {
        this._div.innerHTML = `
            <h4> Best and Worst Reviews:</h4>
            ${(props != undefined
                ? `
                    <br /> <b> Best:  </b><br />"${props.highest}" <br /> <br /> 
                    <b> Worst: </b><br />"${props.lowest}"
                ` 
                : '<b>Click on a Pub!</b>'
            )}
        `//End Panel Contents
    };

    panel.addTo(map_obj);
    return panel;

    
}

