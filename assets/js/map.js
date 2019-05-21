document.addEventListener('DOMContentLoaded', function () {
    var map = new mapboxgl.Map({
        container: 'map',
        style: mapData.style,
        center: mapData.center,
        zoom: mapData.zoom,
        hash: true,
        scrollZoom: true
    });

    const nav = new mapboxgl.NavigationControl({
        showCompass: false
    });

    map.addControl(nav, 'top-left');

    map.addControl(new mapboxgl.ScaleControl({position: 'bottom-right'}));


    // add markers to map
    mapData.geojson.features.forEach(function(marker) {
        var size = marker.properties.size

        // create a DOM element for the marker
        var el = document.createElement('div');
        el.setAttribute('class','map-icon-wrapper');
        var icon = document.createElement('div');
        icon.setAttribute('class','map-icon-image');
        el.appendChild(icon);

        if ( !marker.properties.nolabel ){
            var title = document.createElement('h1');
            el.appendChild(title);
            title.textContent = marker.properties.title;
        }

        icon.classList.add(marker.properties.icon);
        icon.style.backgroundImage = 'url(/assets/imgs/map-icons/' + marker.properties.icon + ')';
        icon.style.width =  size + 'px';
        icon.style.height =  size + 'px';

        var osm_type = marker.properties.osm_way ? 'way' : 'node';
        var osm_url = `https://www.openstreetmap.org/${osm_type}/${marker.properties.osm_id}`;


        var popUp = new mapboxgl.Popup({ offset: 5 })
                    .setHTML(
                    `
                    <h3>${marker.properties.title}</h3>
                    <p>${marker.properties.description}</p>
                    <p class="caption"><a href="${osm_url}">Ver en OSM</a></p>
                    `);
                
        // add marker to map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popUp)
        .addTo(map);
        });
});