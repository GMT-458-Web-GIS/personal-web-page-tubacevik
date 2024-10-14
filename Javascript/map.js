// OpenLayers haritasını başlat
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([30, 40]),
        zoom: 5
    })
});

// Şehir işaretçilerini ekle
cities.forEach(city => {
    const marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(city.coordinates)),
        name: city.name
    });

    const vectorSource = new ol.source.Vector({
        features: [marker]
    });

    const markerVectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            image: new ol.style.Icon({
                src: 'https://openlayers.org/en/latest/examples/data/icon.png', // İşaretçi simgesi
                scale: 0.05 // İşaretçi boyutu
            })
        })
    });

    map.addLayer(markerVectorLayer);
});

const markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5, // Dairenin yarıçapı
            fill: new ol.style.Fill({
                color: 'red' // Dairenin rengi
            }),
            stroke: new ol.style.Stroke({
                color: 'black', // Kenar rengi
                width: 1 // Kenar kalınlığı
            })
        })
    })
});


