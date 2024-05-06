# Cork Pubs Map
## By Shea Bruer

#### Objective: Create a Map to show the Best Pubs in Cork as well as show the geographic density of all the pubs in Cork City.

### Dataset Creation:
I custom created the geojson used for this map. I found a list of all pubs in Cork via CorkPubTrails.ie and their A to Z list of Cork Pubs. I created an attribute table in excel with columns: name, lat, long, rating, highest, and lowest. The "highest" column is the top review available on google by searching by best reviews. The "lowest" column is for the top result on google review when searching by the worst reviews. 

The excel sheet was then converted to a geojson file via geojson.io. 

### Libraries/Resources Used:
The libraries used are 
1. Leaflet
2. Ajax
3. JQuery
4. Chroma
5. Mapbox Basemap

### Program Layout
#### CSS Styling

#### Javascript
My Javascript index file simply calls on four scripts of 4 scripts.
1. `RatingLegend.js`: Script that holds the function `ConstructRatingLegend` for the Legend, positioning it in the top right, and the innerHTML which uses the colors created with Chroma to add color squares.
2.` ReviewPanel.js`: Script that holds function `ConstructReviewPanel` which creates a `var` that is placed in the bottom right of the overall map. This panel will be updated using the function `update` which either says "click on a pub!" or displays the highest and lowest attribute from the geojson when a pub is clicked.
3. `CorkPubs.js`: This houses the function `ConstructGeojson` which defines how the points from the GeoJson are added to the leaflet layer and divides them into classes based on the value in their rating attribute. It takes these classes and applies a Font Awesome icon "fa-glass-water" which is meant to symbolize a pint of beer. This script also holds a function that adds a listener for when the mouse hovers over an icon which will then display the name of the pub as well as its specfic rating. It also adds the function OnClick which is used for populating the review panel. 
4. `Index.js`: This script first applies the color styling for the marker icons. It also uses the other functions, set up in the previously mentioned scripts, to construct the leaflet map centered on Cork Ireland. 
    
### Color Choice
I chose to use the colors of the irish flag: Orange, White, and Green for my color pallete on this map. I used a monochromatic basemap from Mapbox that I then customized to be the specific color value of the Irish Flag's green. I then used Chroma's Oranges color pallette for the icons which scales from white to orange which gives the map an irish feel. 