var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_contoh_1 = new ol.format.GeoJSON();
var features_contoh_1 = format_contoh_1.readFeatures(json_contoh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contoh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contoh_1.addFeatures(features_contoh_1);
var lyr_contoh_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contoh_1, 
                style: style_contoh_1,
                popuplayertitle: 'contoh',
                interactive: true,
                title: '<img src="styles/legend/contoh_1.png" /> contoh'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_contoh_1.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_contoh_1];
lyr_contoh_1.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'foto': 'foto', });
lyr_contoh_1.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'Range', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'foto': 'ExternalResource', });
lyr_contoh_1.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'foto': 'no label', });
lyr_contoh_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});