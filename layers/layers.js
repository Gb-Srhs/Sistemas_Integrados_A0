var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_municipios_PISF_fora_PE_leg_dup_2 = new ol.format.GeoJSON();
var features_municipios_PISF_fora_PE_leg_dup_2 = format_municipios_PISF_fora_PE_leg_dup_2.readFeatures(json_municipios_PISF_fora_PE_leg_dup_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_PISF_fora_PE_leg_dup_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_PISF_fora_PE_leg_dup_2.addFeatures(features_municipios_PISF_fora_PE_leg_dup_2);
var lyr_municipios_PISF_fora_PE_leg_dup_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipios_PISF_fora_PE_leg_dup_2, 
                style: style_municipios_PISF_fora_PE_leg_dup_2,
                popuplayertitle: "municipios_PISF_fora_PE_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/municipios_PISF_fora_PE_leg_dup_2.png" /> municipios_PISF_fora_PE_leg_dup'
                });
var format_rio_sao_francisco_dup_3 = new ol.format.GeoJSON();
var features_rio_sao_francisco_dup_3 = format_rio_sao_francisco_dup_3.readFeatures(json_rio_sao_francisco_dup_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rio_sao_francisco_dup_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rio_sao_francisco_dup_3.addFeatures(features_rio_sao_francisco_dup_3);
var lyr_rio_sao_francisco_dup_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rio_sao_francisco_dup_3, 
                style: style_rio_sao_francisco_dup_3,
                popuplayertitle: "rio_sao_francisco_dup",
                interactive: true,
                    title: '<img src="styles/legend/rio_sao_francisco_dup_3.png" /> rio_sao_francisco_dup'
                });
var format_serro_azul_obras_leg_dup_4 = new ol.format.GeoJSON();
var features_serro_azul_obras_leg_dup_4 = format_serro_azul_obras_leg_dup_4.readFeatures(json_serro_azul_obras_leg_dup_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_serro_azul_obras_leg_dup_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_serro_azul_obras_leg_dup_4.addFeatures(features_serro_azul_obras_leg_dup_4);
var lyr_serro_azul_obras_leg_dup_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_serro_azul_obras_leg_dup_4, 
                style: style_serro_azul_obras_leg_dup_4,
                popuplayertitle: "serro_azul_obras_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/serro_azul_obras_leg_dup_4.png" /> serro_azul_obras_leg_dup'
                });
var format_adutoras_agreste_existentes_leg_dup_5 = new ol.format.GeoJSON();
var features_adutoras_agreste_existentes_leg_dup_5 = format_adutoras_agreste_existentes_leg_dup_5.readFeatures(json_adutoras_agreste_existentes_leg_dup_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutoras_agreste_existentes_leg_dup_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutoras_agreste_existentes_leg_dup_5.addFeatures(features_adutoras_agreste_existentes_leg_dup_5);
var lyr_adutoras_agreste_existentes_leg_dup_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutoras_agreste_existentes_leg_dup_5, 
                style: style_adutoras_agreste_existentes_leg_dup_5,
                popuplayertitle: "adutoras_agreste_existentes_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/adutoras_agreste_existentes_leg_dup_5.png" /> adutoras_agreste_existentes_leg_dup'
                });
var format_adutora_pirangi_leg_dup_6 = new ol.format.GeoJSON();
var features_adutora_pirangi_leg_dup_6 = format_adutora_pirangi_leg_dup_6.readFeatures(json_adutora_pirangi_leg_dup_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutora_pirangi_leg_dup_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutora_pirangi_leg_dup_6.addFeatures(features_adutora_pirangi_leg_dup_6);
var lyr_adutora_pirangi_leg_dup_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutora_pirangi_leg_dup_6, 
                style: style_adutora_pirangi_leg_dup_6,
                popuplayertitle: "adutora_pirangi_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/adutora_pirangi_leg_dup_6.png" /> adutora_pirangi_leg_dup'
                });
var format_adutora_panelas_II_leg_dup_7 = new ol.format.GeoJSON();
var features_adutora_panelas_II_leg_dup_7 = format_adutora_panelas_II_leg_dup_7.readFeatures(json_adutora_panelas_II_leg_dup_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutora_panelas_II_leg_dup_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutora_panelas_II_leg_dup_7.addFeatures(features_adutora_panelas_II_leg_dup_7);
var lyr_adutora_panelas_II_leg_dup_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutora_panelas_II_leg_dup_7, 
                style: style_adutora_panelas_II_leg_dup_7,
                popuplayertitle: "adutora_panelas_II_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/adutora_panelas_II_leg_dup_7.png" /> adutora_panelas_II_leg_dup'
                });
var format_serro_azul_existente_leg_dup_8 = new ol.format.GeoJSON();
var features_serro_azul_existente_leg_dup_8 = format_serro_azul_existente_leg_dup_8.readFeatures(json_serro_azul_existente_leg_dup_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_serro_azul_existente_leg_dup_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_serro_azul_existente_leg_dup_8.addFeatures(features_serro_azul_existente_leg_dup_8);
var lyr_serro_azul_existente_leg_dup_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_serro_azul_existente_leg_dup_8, 
                style: style_serro_azul_existente_leg_dup_8,
                popuplayertitle: "serro_azul_existente_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/serro_azul_existente_leg_dup_8.png" /> serro_azul_existente_leg_dup'
                });
var format_adutora_alto_capibaribe_leg_dup_9 = new ol.format.GeoJSON();
var features_adutora_alto_capibaribe_leg_dup_9 = format_adutora_alto_capibaribe_leg_dup_9.readFeatures(json_adutora_alto_capibaribe_leg_dup_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutora_alto_capibaribe_leg_dup_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutora_alto_capibaribe_leg_dup_9.addFeatures(features_adutora_alto_capibaribe_leg_dup_9);
var lyr_adutora_alto_capibaribe_leg_dup_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutora_alto_capibaribe_leg_dup_9, 
                style: style_adutora_alto_capibaribe_leg_dup_9,
                popuplayertitle: "adutora_alto_capibaribe_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/adutora_alto_capibaribe_leg_dup_9.png" /> adutora_alto_capibaribe_leg_dup'
                });
var format_SI_agreste_2_etapa_leg_dup_10 = new ol.format.GeoJSON();
var features_SI_agreste_2_etapa_leg_dup_10 = format_SI_agreste_2_etapa_leg_dup_10.readFeatures(json_SI_agreste_2_etapa_leg_dup_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_agreste_2_etapa_leg_dup_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_agreste_2_etapa_leg_dup_10.addFeatures(features_SI_agreste_2_etapa_leg_dup_10);
var lyr_SI_agreste_2_etapa_leg_dup_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_agreste_2_etapa_leg_dup_10, 
                style: style_SI_agreste_2_etapa_leg_dup_10,
                popuplayertitle: "SI_agreste_2_etapa_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/SI_agreste_2_etapa_leg_dup_10.png" /> SI_agreste_2_etapa_leg_dup'
                });
var format_SI_agreste_1_etapa_leg_dup_11 = new ol.format.GeoJSON();
var features_SI_agreste_1_etapa_leg_dup_11 = format_SI_agreste_1_etapa_leg_dup_11.readFeatures(json_SI_agreste_1_etapa_leg_dup_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_agreste_1_etapa_leg_dup_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_agreste_1_etapa_leg_dup_11.addFeatures(features_SI_agreste_1_etapa_leg_dup_11);
var lyr_SI_agreste_1_etapa_leg_dup_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_agreste_1_etapa_leg_dup_11, 
                style: style_SI_agreste_1_etapa_leg_dup_11,
                popuplayertitle: "SI_agreste_1_etapa_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/SI_agreste_1_etapa_leg_dup_11.png" /> SI_agreste_1_etapa_leg_dup'
                });
var format_SI_agreste_1_etapa_obra_leg_dup_12 = new ol.format.GeoJSON();
var features_SI_agreste_1_etapa_obra_leg_dup_12 = format_SI_agreste_1_etapa_obra_leg_dup_12.readFeatures(json_SI_agreste_1_etapa_obra_leg_dup_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_agreste_1_etapa_obra_leg_dup_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_agreste_1_etapa_obra_leg_dup_12.addFeatures(features_SI_agreste_1_etapa_obra_leg_dup_12);
var lyr_SI_agreste_1_etapa_obra_leg_dup_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_agreste_1_etapa_obra_leg_dup_12, 
                style: style_SI_agreste_1_etapa_obra_leg_dup_12,
                popuplayertitle: "SI_agreste_1_etapa_obra_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/SI_agreste_1_etapa_obra_leg_dup_12.png" /> SI_agreste_1_etapa_obra_leg_dup'
                });
var format_adutoras_moxoto_leg_dup_13 = new ol.format.GeoJSON();
var features_adutoras_moxoto_leg_dup_13 = format_adutoras_moxoto_leg_dup_13.readFeatures(json_adutoras_moxoto_leg_dup_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutoras_moxoto_leg_dup_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutoras_moxoto_leg_dup_13.addFeatures(features_adutoras_moxoto_leg_dup_13);
var lyr_adutoras_moxoto_leg_dup_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutoras_moxoto_leg_dup_13, 
                style: style_adutoras_moxoto_leg_dup_13,
                popuplayertitle: "adutoras_moxoto_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/adutoras_moxoto_leg_dup_13.png" /> adutoras_moxoto_leg_dup'
                });
var format_ramal_agreste_leg_dup_14 = new ol.format.GeoJSON();
var features_ramal_agreste_leg_dup_14 = format_ramal_agreste_leg_dup_14.readFeatures(json_ramal_agreste_leg_dup_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ramal_agreste_leg_dup_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ramal_agreste_leg_dup_14.addFeatures(features_ramal_agreste_leg_dup_14);
var lyr_ramal_agreste_leg_dup_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ramal_agreste_leg_dup_14, 
                style: style_ramal_agreste_leg_dup_14,
                popuplayertitle: "ramal_agreste_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/ramal_agreste_leg_dup_14.png" /> ramal_agreste_leg_dup'
                });
var format_adutoras_sertao_2_leg_dup_15 = new ol.format.GeoJSON();
var features_adutoras_sertao_2_leg_dup_15 = format_adutoras_sertao_2_leg_dup_15.readFeatures(json_adutoras_sertao_2_leg_dup_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutoras_sertao_2_leg_dup_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutoras_sertao_2_leg_dup_15.addFeatures(features_adutoras_sertao_2_leg_dup_15);
var lyr_adutoras_sertao_2_leg_dup_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutoras_sertao_2_leg_dup_15, 
                style: style_adutoras_sertao_2_leg_dup_15,
                popuplayertitle: "adutoras_sertao_2_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/adutoras_sertao_2_leg_dup_15.png" /> adutoras_sertao_2_leg_dup'
                });
var format_SI_pajeu_leg_dup_16 = new ol.format.GeoJSON();
var features_SI_pajeu_leg_dup_16 = format_SI_pajeu_leg_dup_16.readFeatures(json_SI_pajeu_leg_dup_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_pajeu_leg_dup_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_pajeu_leg_dup_16.addFeatures(features_SI_pajeu_leg_dup_16);
var lyr_SI_pajeu_leg_dup_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_pajeu_leg_dup_16, 
                style: style_SI_pajeu_leg_dup_16,
                popuplayertitle: "SI_pajeu_leg_dup",
                interactive: true,
    title: 'SI_pajeu_leg_dup<br />\
    <img src="styles/legend/SI_pajeu_leg_dup_16_0.png" /> Existente<br />\
    <img src="styles/legend/SI_pajeu_leg_dup_16_1.png" /> Em Obras<br />'
        });
var format_SI_pajeu_duplicacao_leg_dup_17 = new ol.format.GeoJSON();
var features_SI_pajeu_duplicacao_leg_dup_17 = format_SI_pajeu_duplicacao_leg_dup_17.readFeatures(json_SI_pajeu_duplicacao_leg_dup_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_pajeu_duplicacao_leg_dup_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_pajeu_duplicacao_leg_dup_17.addFeatures(features_SI_pajeu_duplicacao_leg_dup_17);
var lyr_SI_pajeu_duplicacao_leg_dup_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_pajeu_duplicacao_leg_dup_17, 
                style: style_SI_pajeu_duplicacao_leg_dup_17,
                popuplayertitle: "SI_pajeu_duplicacao_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/SI_pajeu_duplicacao_leg_dup_17.png" /> SI_pajeu_duplicacao_leg_dup'
                });
var format_adutora_salgueiro_leg_dup_18 = new ol.format.GeoJSON();
var features_adutora_salgueiro_leg_dup_18 = format_adutora_salgueiro_leg_dup_18.readFeatures(json_adutora_salgueiro_leg_dup_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutora_salgueiro_leg_dup_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutora_salgueiro_leg_dup_18.addFeatures(features_adutora_salgueiro_leg_dup_18);
var lyr_adutora_salgueiro_leg_dup_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutora_salgueiro_leg_dup_18, 
                style: style_adutora_salgueiro_leg_dup_18,
                popuplayertitle: "adutora_salgueiro_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/adutora_salgueiro_leg_dup_18.png" /> adutora_salgueiro_leg_dup'
                });
var format_SI_salgueiro_leg_dup_19 = new ol.format.GeoJSON();
var features_SI_salgueiro_leg_dup_19 = format_SI_salgueiro_leg_dup_19.readFeatures(json_SI_salgueiro_leg_dup_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_salgueiro_leg_dup_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_salgueiro_leg_dup_19.addFeatures(features_SI_salgueiro_leg_dup_19);
var lyr_SI_salgueiro_leg_dup_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_salgueiro_leg_dup_19, 
                style: style_SI_salgueiro_leg_dup_19,
                popuplayertitle: "SI_salgueiro_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/SI_salgueiro_leg_dup_19.png" /> SI_salgueiro_leg_dup'
                });
var format_sistema_adutor_salgueiro_leg_dup_20 = new ol.format.GeoJSON();
var features_sistema_adutor_salgueiro_leg_dup_20 = format_sistema_adutor_salgueiro_leg_dup_20.readFeatures(json_sistema_adutor_salgueiro_leg_dup_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sistema_adutor_salgueiro_leg_dup_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sistema_adutor_salgueiro_leg_dup_20.addFeatures(features_sistema_adutor_salgueiro_leg_dup_20);
var lyr_sistema_adutor_salgueiro_leg_dup_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sistema_adutor_salgueiro_leg_dup_20, 
                style: style_sistema_adutor_salgueiro_leg_dup_20,
                popuplayertitle: "sistema_adutor_salgueiro_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/sistema_adutor_salgueiro_leg_dup_20.png" /> sistema_adutor_salgueiro_leg_dup'
                });
var format_adutora_negreiros_reforco_oeste_leg_dup_21 = new ol.format.GeoJSON();
var features_adutora_negreiros_reforco_oeste_leg_dup_21 = format_adutora_negreiros_reforco_oeste_leg_dup_21.readFeatures(json_adutora_negreiros_reforco_oeste_leg_dup_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutora_negreiros_reforco_oeste_leg_dup_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutora_negreiros_reforco_oeste_leg_dup_21.addFeatures(features_adutora_negreiros_reforco_oeste_leg_dup_21);
var lyr_adutora_negreiros_reforco_oeste_leg_dup_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutora_negreiros_reforco_oeste_leg_dup_21, 
                style: style_adutora_negreiros_reforco_oeste_leg_dup_21,
                popuplayertitle: "adutora_negreiros_reforco_oeste_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/adutora_negreiros_reforco_oeste_leg_dup_21.png" /> adutora_negreiros_reforco_oeste_leg_dup'
                });
var format_adutora_chapeu_reforco_oeste_leg_dup_22 = new ol.format.GeoJSON();
var features_adutora_chapeu_reforco_oeste_leg_dup_22 = format_adutora_chapeu_reforco_oeste_leg_dup_22.readFeatures(json_adutora_chapeu_reforco_oeste_leg_dup_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutora_chapeu_reforco_oeste_leg_dup_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutora_chapeu_reforco_oeste_leg_dup_22.addFeatures(features_adutora_chapeu_reforco_oeste_leg_dup_22);
var lyr_adutora_chapeu_reforco_oeste_leg_dup_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutora_chapeu_reforco_oeste_leg_dup_22, 
                style: style_adutora_chapeu_reforco_oeste_leg_dup_22,
                popuplayertitle: "adutora_chapeu_reforco_oeste_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/adutora_chapeu_reforco_oeste_leg_dup_22.png" /> adutora_chapeu_reforco_oeste_leg_dup'
                });
var format_ramal_entremontes_leg_dup_23 = new ol.format.GeoJSON();
var features_ramal_entremontes_leg_dup_23 = format_ramal_entremontes_leg_dup_23.readFeatures(json_ramal_entremontes_leg_dup_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ramal_entremontes_leg_dup_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ramal_entremontes_leg_dup_23.addFeatures(features_ramal_entremontes_leg_dup_23);
var lyr_ramal_entremontes_leg_dup_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ramal_entremontes_leg_dup_23, 
                style: style_ramal_entremontes_leg_dup_23,
                popuplayertitle: "ramal_entremontes_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/ramal_entremontes_leg_dup_23.png" /> ramal_entremontes_leg_dup'
                });
var format_SI_oeste_leg_dup_24 = new ol.format.GeoJSON();
var features_SI_oeste_leg_dup_24 = format_SI_oeste_leg_dup_24.readFeatures(json_SI_oeste_leg_dup_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_oeste_leg_dup_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_oeste_leg_dup_24.addFeatures(features_SI_oeste_leg_dup_24);
var lyr_SI_oeste_leg_dup_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_oeste_leg_dup_24, 
                style: style_SI_oeste_leg_dup_24,
                popuplayertitle: "SI_oeste_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/SI_oeste_leg_dup_24.png" /> SI_oeste_leg_dup'
                });
var format_SI_oeste_duplicacao_leg_dup_25 = new ol.format.GeoJSON();
var features_SI_oeste_duplicacao_leg_dup_25 = format_SI_oeste_duplicacao_leg_dup_25.readFeatures(json_SI_oeste_duplicacao_leg_dup_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_oeste_duplicacao_leg_dup_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_oeste_duplicacao_leg_dup_25.addFeatures(features_SI_oeste_duplicacao_leg_dup_25);
var lyr_SI_oeste_duplicacao_leg_dup_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_oeste_duplicacao_leg_dup_25, 
                style: style_SI_oeste_duplicacao_leg_dup_25,
                popuplayertitle: "SI_oeste_duplicacao_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/SI_oeste_duplicacao_leg_dup_25.png" /> SI_oeste_duplicacao_leg_dup'
                });
var format_SI_afranio_dormentes_leg_dup_26 = new ol.format.GeoJSON();
var features_SI_afranio_dormentes_leg_dup_26 = format_SI_afranio_dormentes_leg_dup_26.readFeatures(json_SI_afranio_dormentes_leg_dup_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_afranio_dormentes_leg_dup_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_afranio_dormentes_leg_dup_26.addFeatures(features_SI_afranio_dormentes_leg_dup_26);
var lyr_SI_afranio_dormentes_leg_dup_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_afranio_dormentes_leg_dup_26, 
                style: style_SI_afranio_dormentes_leg_dup_26,
                popuplayertitle: "SI_afranio_dormentes_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/SI_afranio_dormentes_leg_dup_26.png" /> SI_afranio_dormentes_leg_dup'
                });
var format_eixo_leste_leg_dup_27 = new ol.format.GeoJSON();
var features_eixo_leste_leg_dup_27 = format_eixo_leste_leg_dup_27.readFeatures(json_eixo_leste_leg_dup_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eixo_leste_leg_dup_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eixo_leste_leg_dup_27.addFeatures(features_eixo_leste_leg_dup_27);
var lyr_eixo_leste_leg_dup_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eixo_leste_leg_dup_27, 
                style: style_eixo_leste_leg_dup_27,
                popuplayertitle: "eixo_leste_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/eixo_leste_leg_dup_27.png" /> eixo_leste_leg_dup'
                });
var format_eixo_norte_leg_dup_28 = new ol.format.GeoJSON();
var features_eixo_norte_leg_dup_28 = format_eixo_norte_leg_dup_28.readFeatures(json_eixo_norte_leg_dup_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eixo_norte_leg_dup_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eixo_norte_leg_dup_28.addFeatures(features_eixo_norte_leg_dup_28);
var lyr_eixo_norte_leg_dup_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eixo_norte_leg_dup_28, 
                style: style_eixo_norte_leg_dup_28,
                popuplayertitle: "eixo_norte_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/eixo_norte_leg_dup_28.png" /> eixo_norte_leg_dup'
                });
var format_adutora_siriji_dup_29 = new ol.format.GeoJSON();
var features_adutora_siriji_dup_29 = format_adutora_siriji_dup_29.readFeatures(json_adutora_siriji_dup_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutora_siriji_dup_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutora_siriji_dup_29.addFeatures(features_adutora_siriji_dup_29);
var lyr_adutora_siriji_dup_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutora_siriji_dup_29, 
                style: style_adutora_siriji_dup_29,
                popuplayertitle: "adutora_siriji_dup",
                interactive: true,
                    title: '<img src="styles/legend/adutora_siriji_dup_29.png" /> adutora_siriji_dup'
                });
var format_adutora_pirapama_dup_30 = new ol.format.GeoJSON();
var features_adutora_pirapama_dup_30 = format_adutora_pirapama_dup_30.readFeatures(json_adutora_pirapama_dup_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutora_pirapama_dup_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutora_pirapama_dup_30.addFeatures(features_adutora_pirapama_dup_30);
var lyr_adutora_pirapama_dup_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutora_pirapama_dup_30, 
                style: style_adutora_pirapama_dup_30,
                popuplayertitle: "adutora_pirapama_dup",
                interactive: true,
                    title: '<img src="styles/legend/adutora_pirapama_dup_30.png" /> adutora_pirapama_dup'
                });
var format_SI_Engenho_Maranhao_31 = new ol.format.GeoJSON();
var features_SI_Engenho_Maranhao_31 = format_SI_Engenho_Maranhao_31.readFeatures(json_SI_Engenho_Maranhao_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_Engenho_Maranhao_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_Engenho_Maranhao_31.addFeatures(features_SI_Engenho_Maranhao_31);
var lyr_SI_Engenho_Maranhao_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_Engenho_Maranhao_31, 
                style: style_SI_Engenho_Maranhao_31,
                popuplayertitle: "SI_Engenho_Maranhao",
                interactive: true,
                    title: '<img src="styles/legend/SI_Engenho_Maranhao_31.png" /> SI_Engenho_Maranhao'
                });
var format_SI_Metropolitana_Norte_32 = new ol.format.GeoJSON();
var features_SI_Metropolitana_Norte_32 = format_SI_Metropolitana_Norte_32.readFeatures(json_SI_Metropolitana_Norte_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_Metropolitana_Norte_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_Metropolitana_Norte_32.addFeatures(features_SI_Metropolitana_Norte_32);
var lyr_SI_Metropolitana_Norte_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_Metropolitana_Norte_32, 
                style: style_SI_Metropolitana_Norte_32,
                popuplayertitle: "SI_Metropolitana_Norte",
                interactive: true,
                    title: '<img src="styles/legend/SI_Metropolitana_Norte_32.png" /> SI_Metropolitana_Norte'
                });
var format_SI_Carpina_33 = new ol.format.GeoJSON();
var features_SI_Carpina_33 = format_SI_Carpina_33.readFeatures(json_SI_Carpina_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SI_Carpina_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SI_Carpina_33.addFeatures(features_SI_Carpina_33);
var lyr_SI_Carpina_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SI_Carpina_33, 
                style: style_SI_Carpina_33,
                popuplayertitle: "SI_Carpina",
                interactive: true,
                    title: '<img src="styles/legend/SI_Carpina_33.png" /> SI_Carpina'
                });
var format_adutoras_demanda_02_01_24_dup_34 = new ol.format.GeoJSON();
var features_adutoras_demanda_02_01_24_dup_34 = format_adutoras_demanda_02_01_24_dup_34.readFeatures(json_adutoras_demanda_02_01_24_dup_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutoras_demanda_02_01_24_dup_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutoras_demanda_02_01_24_dup_34.addFeatures(features_adutoras_demanda_02_01_24_dup_34);
var lyr_adutoras_demanda_02_01_24_dup_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutoras_demanda_02_01_24_dup_34, 
                style: style_adutoras_demanda_02_01_24_dup_34,
                popuplayertitle: "adutoras_demanda_02_01_24_dup",
                interactive: true,
    title: 'adutoras_demanda_02_01_24_dup<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_dup_34_0.png" /> Sistema Integrado Água Torta<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_dup_34_1.png" /> Sistema Integrado També<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_dup_34_2.png" /> Sistemas Integrados Itaquitinga-Botafogo e Itapirema-Botafogo<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_dup_34_3.png" /> Sistema Integrado Cotunguba-Carpina - Etapa 1<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_dup_34_4.png" /> Sistema Integrado Cotunguba-Carpina - Etapa 2<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_dup_34_5.png" /> Sistema Integrado Engenho Maranhão<br />'
        });
var format_comunidades_beneficiadas_PISF_leg_dup_35 = new ol.format.GeoJSON();
var features_comunidades_beneficiadas_PISF_leg_dup_35 = format_comunidades_beneficiadas_PISF_leg_dup_35.readFeatures(json_comunidades_beneficiadas_PISF_leg_dup_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunidades_beneficiadas_PISF_leg_dup_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunidades_beneficiadas_PISF_leg_dup_35.addFeatures(features_comunidades_beneficiadas_PISF_leg_dup_35);
var lyr_comunidades_beneficiadas_PISF_leg_dup_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comunidades_beneficiadas_PISF_leg_dup_35, 
                style: style_comunidades_beneficiadas_PISF_leg_dup_35,
                popuplayertitle: "comunidades_beneficiadas_PISF_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/comunidades_beneficiadas_PISF_leg_dup_35.png" /> comunidades_beneficiadas_PISF_leg_dup'
                });
var format_sedes_beneficiadas_PISF_leg_dup_36 = new ol.format.GeoJSON();
var features_sedes_beneficiadas_PISF_leg_dup_36 = format_sedes_beneficiadas_PISF_leg_dup_36.readFeatures(json_sedes_beneficiadas_PISF_leg_dup_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sedes_beneficiadas_PISF_leg_dup_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sedes_beneficiadas_PISF_leg_dup_36.addFeatures(features_sedes_beneficiadas_PISF_leg_dup_36);
var lyr_sedes_beneficiadas_PISF_leg_dup_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sedes_beneficiadas_PISF_leg_dup_36, 
                style: style_sedes_beneficiadas_PISF_leg_dup_36,
                popuplayertitle: "sedes_beneficiadas_PISF_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/sedes_beneficiadas_PISF_leg_dup_36.png" /> sedes_beneficiadas_PISF_leg_dup'
                });
var format_barragens_SRHS_3_dup_37 = new ol.format.GeoJSON();
var features_barragens_SRHS_3_dup_37 = format_barragens_SRHS_3_dup_37.readFeatures(json_barragens_SRHS_3_dup_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barragens_SRHS_3_dup_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barragens_SRHS_3_dup_37.addFeatures(features_barragens_SRHS_3_dup_37);
var lyr_barragens_SRHS_3_dup_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barragens_SRHS_3_dup_37, 
                style: style_barragens_SRHS_3_dup_37,
                popuplayertitle: "barragens_SRHS_3_dup",
                interactive: true,
    title: 'barragens_SRHS_3_dup<br />\
    <img src="styles/legend/barragens_SRHS_3_dup_37_0.png" /> Planejada<br />\
    <img src="styles/legend/barragens_SRHS_3_dup_37_1.png" /> Iniciada<br />\
    <img src="styles/legend/barragens_SRHS_3_dup_37_2.png" /> Recuperação<br />\
    <img src="styles/legend/barragens_SRHS_3_dup_37_3.png" /> Obras Paralisadas<br />'
        });
var format_barragens_SRHS_38 = new ol.format.GeoJSON();
var features_barragens_SRHS_38 = format_barragens_SRHS_38.readFeatures(json_barragens_SRHS_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barragens_SRHS_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barragens_SRHS_38.addFeatures(features_barragens_SRHS_38);
var lyr_barragens_SRHS_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barragens_SRHS_38, 
                style: style_barragens_SRHS_38,
                popuplayertitle: "barragens_SRHS",
                interactive: true,
                    title: '<img src="styles/legend/barragens_SRHS_38.png" /> barragens_SRHS'
                });
var format_barragens_PISF_leg_dup_39 = new ol.format.GeoJSON();
var features_barragens_PISF_leg_dup_39 = format_barragens_PISF_leg_dup_39.readFeatures(json_barragens_PISF_leg_dup_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barragens_PISF_leg_dup_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barragens_PISF_leg_dup_39.addFeatures(features_barragens_PISF_leg_dup_39);
var lyr_barragens_PISF_leg_dup_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barragens_PISF_leg_dup_39, 
                style: style_barragens_PISF_leg_dup_39,
                popuplayertitle: "barragens_PISF_leg_dup",
                interactive: true,
                    title: '<img src="styles/legend/barragens_PISF_leg_dup_39.png" /> barragens_PISF_leg_dup'
                });
var format_rio_ipojuca_40 = new ol.format.GeoJSON();
var features_rio_ipojuca_40 = format_rio_ipojuca_40.readFeatures(json_rio_ipojuca_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rio_ipojuca_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rio_ipojuca_40.addFeatures(features_rio_ipojuca_40);
var lyr_rio_ipojuca_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rio_ipojuca_40, 
                style: style_rio_ipojuca_40,
                popuplayertitle: "rio_ipojuca",
                interactive: true,
                    title: '<img src="styles/legend/rio_ipojuca_40.png" /> rio_ipojuca'
                });
var format_adutora_siriji_41 = new ol.format.GeoJSON();
var features_adutora_siriji_41 = format_adutora_siriji_41.readFeatures(json_adutora_siriji_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutora_siriji_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutora_siriji_41.addFeatures(features_adutora_siriji_41);
var lyr_adutora_siriji_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutora_siriji_41, 
                style: style_adutora_siriji_41,
                popuplayertitle: "adutora_siriji",
                interactive: true,
                    title: '<img src="styles/legend/adutora_siriji_41.png" /> adutora_siriji'
                });
var format_adutora_pirapama_42 = new ol.format.GeoJSON();
var features_adutora_pirapama_42 = format_adutora_pirapama_42.readFeatures(json_adutora_pirapama_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutora_pirapama_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutora_pirapama_42.addFeatures(features_adutora_pirapama_42);
var lyr_adutora_pirapama_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutora_pirapama_42, 
                style: style_adutora_pirapama_42,
                popuplayertitle: "adutora_pirapama",
                interactive: true,
                    title: '<img src="styles/legend/adutora_pirapama_42.png" /> adutora_pirapama'
                });
var format_adutoras_demanda_02_01_24_43 = new ol.format.GeoJSON();
var features_adutoras_demanda_02_01_24_43 = format_adutoras_demanda_02_01_24_43.readFeatures(json_adutoras_demanda_02_01_24_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adutoras_demanda_02_01_24_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adutoras_demanda_02_01_24_43.addFeatures(features_adutoras_demanda_02_01_24_43);
var lyr_adutoras_demanda_02_01_24_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adutoras_demanda_02_01_24_43, 
                style: style_adutoras_demanda_02_01_24_43,
                popuplayertitle: "adutoras_demanda_02_01_24",
                interactive: true,
    title: 'adutoras_demanda_02_01_24<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_43_0.png" /> Sistema Integrado Água Torta<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_43_1.png" /> Sistema Integrado També<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_43_2.png" /> Sistemas Integrados Itaquitinga-Botafogo e Itapirema-Botafogo<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_43_3.png" /> Sistema Integrado Cotunguba-Carpina - Etapa 1<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_43_4.png" /> Sistema Integrado Cotunguba-Carpina - Etapa 2<br />\
    <img src="styles/legend/adutoras_demanda_02_01_24_43_5.png" /> Sistema Integrado Engenho Maranhão<br />'
        });
var format_ETA_suape_44 = new ol.format.GeoJSON();
var features_ETA_suape_44 = format_ETA_suape_44.readFeatures(json_ETA_suape_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ETA_suape_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ETA_suape_44.addFeatures(features_ETA_suape_44);
var lyr_ETA_suape_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ETA_suape_44, 
                style: style_ETA_suape_44,
                popuplayertitle: "ETA_suape",
                interactive: true,
                    title: '<img src="styles/legend/ETA_suape_44.png" /> ETA_suape'
                });
var format_suape_45 = new ol.format.GeoJSON();
var features_suape_45 = format_suape_45.readFeatures(json_suape_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_suape_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_suape_45.addFeatures(features_suape_45);
var lyr_suape_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_suape_45, 
                style: style_suape_45,
                popuplayertitle: "suape",
                interactive: true,
                    title: '<img src="styles/legend/suape_45.png" /> suape'
                });
var format_sedes_PE_demanda_02_01_24_46 = new ol.format.GeoJSON();
var features_sedes_PE_demanda_02_01_24_46 = format_sedes_PE_demanda_02_01_24_46.readFeatures(json_sedes_PE_demanda_02_01_24_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sedes_PE_demanda_02_01_24_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sedes_PE_demanda_02_01_24_46.addFeatures(features_sedes_PE_demanda_02_01_24_46);
var lyr_sedes_PE_demanda_02_01_24_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sedes_PE_demanda_02_01_24_46, 
                style: style_sedes_PE_demanda_02_01_24_46,
                popuplayertitle: "sedes_PE_demanda_02_01_24",
                interactive: true,
    title: 'sedes_PE_demanda_02_01_24<br />\
    <img src="styles/legend/sedes_PE_demanda_02_01_24_46_0.png" /> Abastecimento<br />\
    <img src="styles/legend/sedes_PE_demanda_02_01_24_46_1.png" /> Controle de cheias<br />'
        });
var format_barragens_exist_demanda_02_01_24_47 = new ol.format.GeoJSON();
var features_barragens_exist_demanda_02_01_24_47 = format_barragens_exist_demanda_02_01_24_47.readFeatures(json_barragens_exist_demanda_02_01_24_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barragens_exist_demanda_02_01_24_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barragens_exist_demanda_02_01_24_47.addFeatures(features_barragens_exist_demanda_02_01_24_47);
var lyr_barragens_exist_demanda_02_01_24_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barragens_exist_demanda_02_01_24_47, 
                style: style_barragens_exist_demanda_02_01_24_47,
                popuplayertitle: "barragens_exist_demanda_02_01_24",
                interactive: true,
                    title: '<img src="styles/legend/barragens_exist_demanda_02_01_24_47.png" /> barragens_exist_demanda_02_01_24'
                });
var format_barragens_demanda_02_01_24_48 = new ol.format.GeoJSON();
var features_barragens_demanda_02_01_24_48 = format_barragens_demanda_02_01_24_48.readFeatures(json_barragens_demanda_02_01_24_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barragens_demanda_02_01_24_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barragens_demanda_02_01_24_48.addFeatures(features_barragens_demanda_02_01_24_48);
var lyr_barragens_demanda_02_01_24_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barragens_demanda_02_01_24_48, 
                style: style_barragens_demanda_02_01_24_48,
                popuplayertitle: "barragens_demanda_02_01_24",
                interactive: true,
    title: 'barragens_demanda_02_01_24<br />\
    <img src="styles/legend/barragens_demanda_02_01_24_48_0.png" /> Abastecimento<br />\
    <img src="styles/legend/barragens_demanda_02_01_24_48_1.png" /> Controle de cheias<br />'
        });
var group_Slide_geral_antigos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_geral_antigos"});
var group_Slide_geral_v1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_geral_v1"});
var group_Slide_geral_v2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_geral_v2"});
var group_Slide_sertao_1_antigos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_sertao_1_antigos"});
var group_Slide_sertao_1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_sertao_1"});
var group_Slide_sertao_2_antigos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_sertao_2_antigos"});
var group_Slide_sertao_2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_sertao_2"});
var group_Slide_agreste_antigos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_agreste_antigos"});
var group_Slide_agreste = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_agreste"});
var group_Slide_mata_metropolitana_antigos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_mata_metropolitana_antigos"});
var group_Slide_mata_metropolitana = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_mata_metropolitana"});
var group_Slide_barragens_SRHS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_barragens_SRHS"});
var group_Slide_barragens_SRHS_2_tres = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Slide_barragens_SRHS_2_(tres)"});
var group_SISAR = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "SISAR"});
var group_Inundacoes = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Inundacoes"});
var group_Morros = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Morros"});
var group_Demanda_02_01_24_shapes_originais = new ol.layer.Group({
                                layers: [lyr_rio_ipojuca_40,lyr_adutora_siriji_41,lyr_adutora_pirapama_42,lyr_adutoras_demanda_02_01_24_43,lyr_ETA_suape_44,lyr_suape_45,lyr_sedes_PE_demanda_02_01_24_46,lyr_barragens_exist_demanda_02_01_24_47,lyr_barragens_demanda_02_01_24_48,],
                                fold: "open",
                                title: "Demanda_02_01_24_(shapes_originais)"});
var group_Mapa_geral = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa_geral"});
var group_Mapa_geral_novo = new ol.layer.Group({
                                layers: [lyr_municipios_PISF_fora_PE_leg_dup_2,lyr_rio_sao_francisco_dup_3,lyr_serro_azul_obras_leg_dup_4,lyr_adutoras_agreste_existentes_leg_dup_5,lyr_adutora_pirangi_leg_dup_6,lyr_adutora_panelas_II_leg_dup_7,lyr_serro_azul_existente_leg_dup_8,lyr_adutora_alto_capibaribe_leg_dup_9,lyr_SI_agreste_2_etapa_leg_dup_10,lyr_SI_agreste_1_etapa_leg_dup_11,lyr_SI_agreste_1_etapa_obra_leg_dup_12,lyr_adutoras_moxoto_leg_dup_13,lyr_ramal_agreste_leg_dup_14,lyr_adutoras_sertao_2_leg_dup_15,lyr_SI_pajeu_leg_dup_16,lyr_SI_pajeu_duplicacao_leg_dup_17,lyr_adutora_salgueiro_leg_dup_18,lyr_SI_salgueiro_leg_dup_19,lyr_sistema_adutor_salgueiro_leg_dup_20,lyr_adutora_negreiros_reforco_oeste_leg_dup_21,lyr_adutora_chapeu_reforco_oeste_leg_dup_22,lyr_ramal_entremontes_leg_dup_23,lyr_SI_oeste_leg_dup_24,lyr_SI_oeste_duplicacao_leg_dup_25,lyr_SI_afranio_dormentes_leg_dup_26,lyr_eixo_leste_leg_dup_27,lyr_eixo_norte_leg_dup_28,lyr_adutora_siriji_dup_29,lyr_adutora_pirapama_dup_30,lyr_SI_Engenho_Maranhao_31,lyr_SI_Metropolitana_Norte_32,lyr_SI_Carpina_33,lyr_adutoras_demanda_02_01_24_dup_34,lyr_comunidades_beneficiadas_PISF_leg_dup_35,lyr_sedes_beneficiadas_PISF_leg_dup_36,lyr_barragens_SRHS_3_dup_37,lyr_barragens_SRHS_38,lyr_barragens_PISF_leg_dup_39,],
                                fold: "open",
                                title: "Mapa_geral_novo"});
var group_Mapa_oeste = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa_oeste"});
var group_Mapa_norte = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa_norte"});
var group_Mapa_pajeu = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa_pajeu"});
var group_Mapa_leste = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa_leste"});
var group_Mapa_agreste = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa_agreste"});
var group_Ficha_oeste = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ficha_oeste"});
var group_Ficha_norte = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ficha_norte"});
var group_Ficha_entremontes = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ficha_entremontes"});
var group_Ficha_pajeu = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ficha_pajeu"});
var group_Ficha_leste = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ficha_leste"});
var group_Ficha_agreste = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ficha_agreste"});
var group_Shapes_originais_principais_nao_excluir_legenda = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Shapes_originais_principais_nao_excluir_(legenda)"});
var group_Shapes_originais_antigos_nao_excluir_legenda = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Shapes_originais_antigos_nao_excluir_(legenda)"});
var group_Outros_legenda = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Outros_(legenda)"});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_municipios_PISF_fora_PE_leg_dup_2.setVisible(true);lyr_rio_sao_francisco_dup_3.setVisible(true);lyr_serro_azul_obras_leg_dup_4.setVisible(true);lyr_adutoras_agreste_existentes_leg_dup_5.setVisible(true);lyr_adutora_pirangi_leg_dup_6.setVisible(true);lyr_adutora_panelas_II_leg_dup_7.setVisible(true);lyr_serro_azul_existente_leg_dup_8.setVisible(true);lyr_adutora_alto_capibaribe_leg_dup_9.setVisible(true);lyr_SI_agreste_2_etapa_leg_dup_10.setVisible(true);lyr_SI_agreste_1_etapa_leg_dup_11.setVisible(true);lyr_SI_agreste_1_etapa_obra_leg_dup_12.setVisible(true);lyr_adutoras_moxoto_leg_dup_13.setVisible(true);lyr_ramal_agreste_leg_dup_14.setVisible(true);lyr_adutoras_sertao_2_leg_dup_15.setVisible(true);lyr_SI_pajeu_leg_dup_16.setVisible(true);lyr_SI_pajeu_duplicacao_leg_dup_17.setVisible(true);lyr_adutora_salgueiro_leg_dup_18.setVisible(true);lyr_SI_salgueiro_leg_dup_19.setVisible(true);lyr_sistema_adutor_salgueiro_leg_dup_20.setVisible(true);lyr_adutora_negreiros_reforco_oeste_leg_dup_21.setVisible(true);lyr_adutora_chapeu_reforco_oeste_leg_dup_22.setVisible(true);lyr_ramal_entremontes_leg_dup_23.setVisible(true);lyr_SI_oeste_leg_dup_24.setVisible(true);lyr_SI_oeste_duplicacao_leg_dup_25.setVisible(true);lyr_SI_afranio_dormentes_leg_dup_26.setVisible(true);lyr_eixo_leste_leg_dup_27.setVisible(true);lyr_eixo_norte_leg_dup_28.setVisible(true);lyr_adutora_siriji_dup_29.setVisible(true);lyr_adutora_pirapama_dup_30.setVisible(true);lyr_SI_Engenho_Maranhao_31.setVisible(true);lyr_SI_Metropolitana_Norte_32.setVisible(true);lyr_SI_Carpina_33.setVisible(true);lyr_adutoras_demanda_02_01_24_dup_34.setVisible(true);lyr_comunidades_beneficiadas_PISF_leg_dup_35.setVisible(true);lyr_sedes_beneficiadas_PISF_leg_dup_36.setVisible(true);lyr_barragens_SRHS_3_dup_37.setVisible(true);lyr_barragens_SRHS_38.setVisible(true);lyr_barragens_PISF_leg_dup_39.setVisible(true);lyr_rio_ipojuca_40.setVisible(true);lyr_adutora_siriji_41.setVisible(true);lyr_adutora_pirapama_42.setVisible(true);lyr_adutoras_demanda_02_01_24_43.setVisible(true);lyr_ETA_suape_44.setVisible(true);lyr_suape_45.setVisible(true);lyr_sedes_PE_demanda_02_01_24_46.setVisible(true);lyr_barragens_exist_demanda_02_01_24_47.setVisible(true);lyr_barragens_demanda_02_01_24_48.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,group_Mapa_geral_novo,group_Demanda_02_01_24_shapes_originais];
lyr_municipios_PISF_fora_PE_leg_dup_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA': 'SIGLA', 'AREA_KM2': 'AREA_KM2', });
lyr_rio_sao_francisco_dup_3.set('fieldAliases', {'gid': 'gid', 'esp_cd': 'esp_cd', 'cod_snisb': 'cod_snisb', 'cod_sar': 'cod_sar', 'nmoriginal': 'nmoriginal', 'nmalternat': 'nmalternat', 'nmgenerico': 'nmgenerico', 'nmligacao': 'nmligacao', 'nmespecifi': 'nmespecifi', 'detipomass': 'detipomass', 'dedominial': 'dedominial', 'dedominio': 'dedominio', 'defiscaliz': 'defiscaliz', 'nmemp': 'nmemp', 'fonmemp': 'fonmemp', 'dtreserv': 'dtreserv', 'fodtreserv': 'fodtreserv', 'nuvolumhm3': 'nuvolumhm3', 'fonuvolume': 'fonuvolume', 'nuperimkm': 'nuperimkm', 'nuareakm2': 'nuareakm2', 'nuareaha': 'nuareaha', 'nucompgeom': 'nucompgeom', 'usoprinc': 'usoprinc', 'fousoprinc': 'fousoprinc', 'detipoapr': 'detipoapr', 'detipomda': 'detipomda', 'salinidade': 'salinidade', 'regime': 'regime', 'nmriocomp': 'nmriocomp', 'nmufe': 'nmufe', 'nmmun': 'nmmun', 'defonte': 'defonte', 'desatelite': 'desatelite', 'deversao': 'deversao', 'deobs': 'deobs', 'nuvzreg': 'nuvzreg', 'nuvzlago': 'nuvzlago', 'nuvzdeflu': 'nuvzdeflu', 'cdtipooper': 'cdtipooper', 'detipooper': 'detipooper', 'fovzlago': 'fovzlago', 'fovzdeflu': 'fovzdeflu', 'fovzreg': 'fovzreg', 'cobarprin': 'cobarprin', 'cotrecho': 'cotrecho', 'nuvzrecebe': 'nuvzrecebe', 'nuvztransf': 'nuvztransf', 'deobsvazao': 'deobsvazao', 'cocda2013': 'cocda2013', 'cocda2017': 'cocda2017', });
lyr_serro_azul_obras_leg_dup_4.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_adutoras_agreste_existentes_leg_dup_5.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_adutora_pirangi_leg_dup_6.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_adutora_panelas_II_leg_dup_7.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_serro_azul_existente_leg_dup_8.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_adutora_alto_capibaribe_leg_dup_9.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_SI_agreste_2_etapa_leg_dup_10.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_SI_agreste_1_etapa_leg_dup_11.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_SI_agreste_1_etapa_obra_leg_dup_12.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_adutoras_moxoto_leg_dup_13.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_ramal_agreste_leg_dup_14.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_adutoras_sertao_2_leg_dup_15.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_SI_pajeu_leg_dup_16.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_SI_pajeu_duplicacao_leg_dup_17.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_adutora_salgueiro_leg_dup_18.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_SI_salgueiro_leg_dup_19.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_sistema_adutor_salgueiro_leg_dup_20.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_adutora_negreiros_reforco_oeste_leg_dup_21.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_adutora_chapeu_reforco_oeste_leg_dup_22.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_ramal_entremontes_leg_dup_23.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_SI_oeste_leg_dup_24.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_SI_oeste_duplicacao_leg_dup_25.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_SI_afranio_dormentes_leg_dup_26.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_eixo_leste_leg_dup_27.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'status': 'status', 'uf': 'uf', 'tipo': 'tipo', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_eixo_norte_leg_dup_28.set('fieldAliases', {'nome': 'nome', 'tipo': 'tipo', 'id': 'id', 'status': 'status', 'uf': 'uf', 'finalidade': 'finalidade', 'extensao': 'extensao', });
lyr_adutora_siriji_dup_29.set('fieldAliases', {'FID': 'FID', 'adt_sr': 'adt_sr', 'gid': 'gid', 'adt_id': 'adt_id', 'adt_status': 'adt_status', 'adt_nm_adu': 'adt_nm_adu', 'adt_ramal': 'adt_ramal', 'adt_uf': 'adt_uf', 'adt_sg_reg': 'adt_sg_reg', 'adt_sis_id': 'adt_sis_id', 'adt_tipo': 'adt_tipo', 'adt_finali': 'adt_finali', 'adt_cd_epp': 'adt_cd_epp', });
lyr_adutora_pirapama_dup_30.set('fieldAliases', {'FID': 'FID', 'adt_sr': 'adt_sr', 'gid': 'gid', 'adt_id': 'adt_id', 'adt_status': 'adt_status', 'adt_nm_adu': 'adt_nm_adu', 'adt_ramal': 'adt_ramal', 'adt_uf': 'adt_uf', 'adt_sg_reg': 'adt_sg_reg', 'adt_sis_id': 'adt_sis_id', 'adt_tipo': 'adt_tipo', 'adt_finali': 'adt_finali', 'adt_cd_epp': 'adt_cd_epp', });
lyr_SI_Engenho_Maranhao_31.set('fieldAliases', {'Name': 'Name', 'Barragens': 'Barragens', 'Etapa': 'Etapa', 'Municipios': 'Municipios', 'extensao': 'extensao', });
lyr_SI_Metropolitana_Norte_32.set('fieldAliases', {'Name': 'Name', 'Barragens': 'Barragens', 'Etapa': 'Etapa', 'Municipios': 'Municipios', 'extensao': 'extensao', });
lyr_SI_Carpina_33.set('fieldAliases', {'Name': 'Name', 'Barragens': 'Barragens', 'Etapa': 'Etapa', 'Municipios': 'Municipios', 'extensao': 'extensao', });
lyr_adutoras_demanda_02_01_24_dup_34.set('fieldAliases', {'Name': 'Name', 'Barragens': 'Barragens', 'Etapa': 'Etapa', 'Municipios': 'Municipios', 'extensao': 'extensao', });
lyr_comunidades_beneficiadas_PISF_leg_dup_35.set('fieldAliases', {'geometriaa': 'geometriaa', 'nome': 'nome', 'geocodigo': 'geocodigo', 'grupo': 'grupo', 'ID': 'ID', 'Número': 'Número', 'Nome_da_co': 'Nome_da_co', 'Tipo_da_Co': 'Tipo_da_Co', 'Situação': 'Situação', 'Município': 'Município', 'Região_de': 'Região_de', 'Microregi': 'Microregi', 'SISAR': 'SISAR', 'Gerência': 'Gerência', 'Gerênci_1': 'Gerênci_1', 'Distância': 'Distância', 'Escola_Rur': 'Escola_Rur', 'Quantidade': 'Quantidade', 'Populaçã': 'Populaçã', 'Imóveis_R': 'Imóveis_R', 'Consumo_de': 'Consumo_de', 'Geração': 'Geração', 'Geraçã_1': 'Geraçã_1', 'Investimen': 'Investimen', 'Investim_1': 'Investim_1', 'Acumulado': 'Acumulado', 'Escolas_at': 'Escolas_at', 'Tipo_de_pr': 'Tipo_de_pr', 'Nome_do_pr': 'Nome_do_pr', 'Sigla': 'Sigla', 'CNPJ': 'CNPJ', 'Endereço': 'Endereço', 'CEP': 'CEP', 'Telefone': 'Telefone', 'Celular': 'Celular', 'Responsáv': 'Responsáv', 'Cargo_do_r': 'Cargo_do_r', 'Telefone_d': 'Telefone_d', 'Email_da_i': 'Email_da_i', 'Pessoa_de': 'Pessoa_de', 'Cargo_da_p': 'Cargo_da_p', 'CPF_da_pes': 'CPF_da_pes', 'Email_da_p': 'Email_da_p', 'Telefone_1': 'Telefone_1', 'Famílias': 'Famílias', 'Populaç_1': 'Populaç_1', 'Família_1': 'Família_1', 'Tem_posto': 'Tem_posto', 'Tem_agente': 'Tem_agente', 'Objeto_da': 'Objeto_da', 'Diagnósti': 'Diagnósti', 'Nº_de_cis': 'Nº_de_cis', 'Nº_de_c_1': 'Nº_de_c_1', 'Concepçã': 'Concepçã', 'Fase_do_em': 'Fase_do_em', 'Programa': 'Programa', 'Tipo_de_ma': 'Tipo_de_ma', 'Distânc_1': 'Distânc_1', 'Desnível': 'Desnível', 'Qualidade': 'Qualidade', 'Controle_d': 'Controle_d', 'Disposiç': 'Disposiç', 'Consumo_pe': 'Consumo_pe', 'Ponto_de_e': 'Ponto_de_e', 'Regularida': 'Regularida', 'Forma_de_o': 'Forma_de_o', 'Ação_com': 'Ação_com', 'Endereç_1': 'Endereç_1', 'Endereç_2': 'Endereç_2', 'A_associac': 'A_associac', 'Nome_da_as': 'Nome_da_as', 'Presidente': 'Presidente', 'Ano_da_cri': 'Ano_da_cri', 'CNPJ_da_as': 'CNPJ_da_as', 'CPF_do_pre': 'CPF_do_pre', 'Telefone_2': 'Telefone_2', 'Municíp_1': 'Municíp_1', 'Tem_plano': 'Tem_plano', 'Tem_plan_1': 'Tem_plan_1', 'Tem_plan_2': 'Tem_plan_2', 'Nº_da_lei': 'Nº_da_lei', 'Nº_da_l_1': 'Nº_da_l_1', 'Nº_da_l_2': 'Nº_da_l_2', 'Disposi_1': 'Disposi_1', 'O_múnicí': 'O_múnicí', 'Lei_que_cr': 'Lei_que_cr', 'Instalaç': 'Instalaç', 'Destino_es': 'Destino_es', 'Tratamento': 'Tratamento', 'Tipo_do_pr': 'Tipo_do_pr', 'Nome_do__1': 'Nome_do__1', 'Cnpj_do_pr': 'Cnpj_do_pr', 'Sigla_do_p': 'Sigla_do_p', 'Municíp_2': 'Municíp_2', 'Telefone_3': 'Telefone_3', 'Status_da': 'Status_da', 'Modelo_de': 'Modelo_de', 'Coordenada': 'Coordenada', 'Coordena_1': 'Coordena_1', 'Custo_Águ': 'Custo_Águ', 'Custo_Ener': 'Custo_Ener', 'Custo_Trat': 'Custo_Trat', 'Custo_Oper': 'Custo_Oper', 'Custo_Manu': 'Custo_Manu', 'Custo_Admi': 'Custo_Admi', });
lyr_sedes_beneficiadas_PISF_leg_dup_36.set('fieldAliases', {'geometriaa': 'geometriaa', 'nome': 'nome', 'geocodigo': 'geocodigo', });
lyr_barragens_SRHS_3_dup_37.set('fieldAliases', {'Barragem': 'Barragem', 'Status': 'Status', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_barragens_SRHS_38.set('fieldAliases', {'Barragem': 'Barragem', 'Status': 'Status', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_barragens_PISF_leg_dup_39.set('fieldAliases', {'Código_SN': 'Código da Barragem', 'Nome_da_Ba': 'Nome da Barragem', 'Nome_Secun': 'Nome_Secun', 'Uso_Princi': 'Uso Principal', 'UF': 'UF', 'Município': 'Município', 'Categoria_': 'Categoria', 'Dano_Poten': 'Dano_Poten', 'Nome_do_Em': 'Nome da Empresa', 'Tipo_Empre': 'Tipo da Empresa', 'Órgão_Fi': 'Órgão Filiado', 'Código_Ba': 'Código da Barragem', 'Regulada_p': 'Regulada_p', 'Número_da': 'Número_da', 'Possui_PAE': 'Possui_PAE', 'Possui_Pla': 'Possui_Pla', 'Possui_Rev': 'Possui_Rev', 'Data_da_Ú': 'Data_da_Ú', 'Barragem_A': 'Barragem_A', 'Altura_Fun': 'Altura_Fun', 'Altura_Ter': 'Altura_Ter', 'Capacidade': 'Capacidade', 'Compriment': 'Comprimento', 'Tipo_de_Ma': 'Tipo_de_Ma', 'Uso_Comple': 'Uso_Comple', 'Classe_de_': 'Classe_de_', 'Curso_Dág': 'Curso D\'água', 'Nome_Curso': 'Nome do Curso', 'Região_Hi': 'Região Hídrica', 'Unidade_de': 'Unidade_de', 'Domínio': 'Domínio', 'Data_da__1': 'Data_da__1', 'Tipo_da_Ú': 'Tipo_da_Ú', 'Nível_de_': 'Nível_de_', 'Possui_Ecl': 'Possui_Ecl', 'Fase_da_Vi': 'Fase_da_Vi', 'Fase_da__1': 'Fase_da__1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Completude': 'Completude', 'Legenda': 'Legenda', });
lyr_rio_ipojuca_40.set('fieldAliases', {'nome': 'nome', 'geometriaa': 'geometriaa', 'tipotrecho': 'tipotrecho', 'navegavel': 'navegavel', 'larguramed': 'larguramed', 'regime': 'regime', 'encoberto': 'encoberto', });
lyr_adutora_siriji_41.set('fieldAliases', {'FID': 'FID', 'adt_sr': 'adt_sr', 'gid': 'gid', 'adt_id': 'adt_id', 'adt_status': 'adt_status', 'adt_nm_adu': 'adt_nm_adu', 'adt_ramal': 'adt_ramal', 'adt_uf': 'adt_uf', 'adt_sg_reg': 'adt_sg_reg', 'adt_sis_id': 'adt_sis_id', 'adt_tipo': 'adt_tipo', 'adt_finali': 'adt_finali', 'adt_cd_epp': 'adt_cd_epp', });
lyr_adutora_pirapama_42.set('fieldAliases', {'FID': 'FID', 'adt_sr': 'adt_sr', 'gid': 'gid', 'adt_id': 'adt_id', 'adt_status': 'adt_status', 'adt_nm_adu': 'adt_nm_adu', 'adt_ramal': 'adt_ramal', 'adt_uf': 'adt_uf', 'adt_sg_reg': 'adt_sg_reg', 'adt_sis_id': 'adt_sis_id', 'adt_tipo': 'adt_tipo', 'adt_finali': 'adt_finali', 'adt_cd_epp': 'adt_cd_epp', });
lyr_adutoras_demanda_02_01_24_43.set('fieldAliases', {'Name': 'Name', 'Barragens': 'Barragens', 'Etapa': 'Etapa', 'Municipios': 'Municipios', 'extensao': 'extensao', });
lyr_ETA_suape_44.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', });
lyr_suape_45.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', });
lyr_sedes_PE_demanda_02_01_24_46.set('fieldAliases', {'geometriaa': 'geometriaa', 'nome': 'nome', 'geocodigo': 'geocodigo', 'latitude': 'latitude', 'longitude': 'longitude', 'Grupo': 'Grupo', });
lyr_barragens_exist_demanda_02_01_24_47.set('fieldAliases', {'BARRAGEM': 'BARRAGEM', 'BACIA': 'BACIA', 'MUNICIPIO': 'MUNICIPIO', 'ID': 'ID', 'NOME': 'NOME', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Legenda': 'Legenda', });
lyr_barragens_demanda_02_01_24_48.set('fieldAliases', {'Barragem': 'Barragem', 'Status': 'Status', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'Objetivo': 'Objetivo', });
lyr_municipios_PISF_fora_PE_leg_dup_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_rio_sao_francisco_dup_3.set('fieldImages', {'gid': 'TextEdit', 'esp_cd': 'TextEdit', 'cod_snisb': 'TextEdit', 'cod_sar': 'TextEdit', 'nmoriginal': 'TextEdit', 'nmalternat': 'TextEdit', 'nmgenerico': 'TextEdit', 'nmligacao': 'TextEdit', 'nmespecifi': 'TextEdit', 'detipomass': 'TextEdit', 'dedominial': 'TextEdit', 'dedominio': 'TextEdit', 'defiscaliz': 'TextEdit', 'nmemp': 'TextEdit', 'fonmemp': 'TextEdit', 'dtreserv': 'TextEdit', 'fodtreserv': 'TextEdit', 'nuvolumhm3': 'TextEdit', 'fonuvolume': 'TextEdit', 'nuperimkm': 'TextEdit', 'nuareakm2': 'TextEdit', 'nuareaha': 'TextEdit', 'nucompgeom': 'TextEdit', 'usoprinc': 'TextEdit', 'fousoprinc': 'TextEdit', 'detipoapr': 'TextEdit', 'detipomda': 'TextEdit', 'salinidade': 'TextEdit', 'regime': 'TextEdit', 'nmriocomp': 'TextEdit', 'nmufe': 'TextEdit', 'nmmun': 'TextEdit', 'defonte': 'TextEdit', 'desatelite': 'TextEdit', 'deversao': 'TextEdit', 'deobs': 'TextEdit', 'nuvzreg': 'TextEdit', 'nuvzlago': 'TextEdit', 'nuvzdeflu': 'TextEdit', 'cdtipooper': 'TextEdit', 'detipooper': 'TextEdit', 'fovzlago': 'TextEdit', 'fovzdeflu': 'TextEdit', 'fovzreg': 'TextEdit', 'cobarprin': 'TextEdit', 'cotrecho': 'TextEdit', 'nuvzrecebe': 'TextEdit', 'nuvztransf': 'TextEdit', 'deobsvazao': 'TextEdit', 'cocda2013': 'TextEdit', 'cocda2017': 'TextEdit', });
lyr_serro_azul_obras_leg_dup_4.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_adutoras_agreste_existentes_leg_dup_5.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_adutora_pirangi_leg_dup_6.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'status': 'TextEdit', 'uf': 'TextEdit', 'tipo': 'TextEdit', 'finalidade': 'TextEdit', 'extensao': 'TextEdit', });
lyr_adutora_panelas_II_leg_dup_7.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'status': 'TextEdit', 'uf': 'TextEdit', 'tipo': 'TextEdit', 'finalidade': 'TextEdit', 'extensao': 'TextEdit', });
lyr_serro_azul_existente_leg_dup_8.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_adutora_alto_capibaribe_leg_dup_9.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_SI_agreste_2_etapa_leg_dup_10.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_SI_agreste_1_etapa_leg_dup_11.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_SI_agreste_1_etapa_obra_leg_dup_12.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_adutoras_moxoto_leg_dup_13.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_ramal_agreste_leg_dup_14.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_adutoras_sertao_2_leg_dup_15.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_SI_pajeu_leg_dup_16.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'status': 'TextEdit', 'uf': 'TextEdit', 'tipo': 'TextEdit', 'finalidade': 'TextEdit', 'extensao': 'TextEdit', });
lyr_SI_pajeu_duplicacao_leg_dup_17.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'status': 'TextEdit', 'uf': 'TextEdit', 'tipo': 'TextEdit', 'finalidade': 'TextEdit', 'extensao': 'TextEdit', });
lyr_adutora_salgueiro_leg_dup_18.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'status': 'TextEdit', 'uf': 'TextEdit', 'tipo': 'TextEdit', 'finalidade': 'TextEdit', 'extensao': 'TextEdit', });
lyr_SI_salgueiro_leg_dup_19.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_sistema_adutor_salgueiro_leg_dup_20.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'status': 'TextEdit', 'uf': 'TextEdit', 'tipo': 'TextEdit', 'finalidade': 'TextEdit', 'extensao': 'TextEdit', });
lyr_adutora_negreiros_reforco_oeste_leg_dup_21.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'status': 'TextEdit', 'uf': 'TextEdit', 'tipo': 'TextEdit', 'finalidade': 'TextEdit', 'extensao': 'TextEdit', });
lyr_adutora_chapeu_reforco_oeste_leg_dup_22.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'status': 'TextEdit', 'uf': 'TextEdit', 'tipo': 'TextEdit', 'finalidade': 'TextEdit', 'extensao': 'TextEdit', });
lyr_ramal_entremontes_leg_dup_23.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_SI_oeste_leg_dup_24.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_SI_oeste_duplicacao_leg_dup_25.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'status': 'TextEdit', 'uf': 'TextEdit', 'tipo': 'TextEdit', 'finalidade': 'TextEdit', 'extensao': 'TextEdit', });
lyr_SI_afranio_dormentes_leg_dup_26.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_eixo_leste_leg_dup_27.set('fieldImages', {'id': '', 'nome': '', 'status': '', 'uf': '', 'tipo': '', 'finalidade': '', 'extensao': '', });
lyr_eixo_norte_leg_dup_28.set('fieldImages', {'nome': '', 'tipo': '', 'id': '', 'status': '', 'uf': '', 'finalidade': '', 'extensao': '', });
lyr_adutora_siriji_dup_29.set('fieldImages', {'FID': 'Range', 'adt_sr': 'Range', 'gid': 'Range', 'adt_id': 'Range', 'adt_status': 'TextEdit', 'adt_nm_adu': 'TextEdit', 'adt_ramal': 'TextEdit', 'adt_uf': 'TextEdit', 'adt_sg_reg': 'TextEdit', 'adt_sis_id': 'TextEdit', 'adt_tipo': 'TextEdit', 'adt_finali': 'TextEdit', 'adt_cd_epp': 'TextEdit', });
lyr_adutora_pirapama_dup_30.set('fieldImages', {'FID': 'Range', 'adt_sr': 'Range', 'gid': 'Range', 'adt_id': 'Range', 'adt_status': 'TextEdit', 'adt_nm_adu': 'TextEdit', 'adt_ramal': 'TextEdit', 'adt_uf': 'TextEdit', 'adt_sg_reg': 'TextEdit', 'adt_sis_id': 'TextEdit', 'adt_tipo': 'TextEdit', 'adt_finali': 'TextEdit', 'adt_cd_epp': 'TextEdit', });
lyr_SI_Engenho_Maranhao_31.set('fieldImages', {'Name': 'TextEdit', 'Barragens': 'TextEdit', 'Etapa': 'TextEdit', 'Municipios': 'TextEdit', 'extensao': 'TextEdit', });
lyr_SI_Metropolitana_Norte_32.set('fieldImages', {'Name': 'TextEdit', 'Barragens': 'TextEdit', 'Etapa': 'TextEdit', 'Municipios': 'TextEdit', 'extensao': 'TextEdit', });
lyr_SI_Carpina_33.set('fieldImages', {'Name': 'TextEdit', 'Barragens': 'TextEdit', 'Etapa': 'TextEdit', 'Municipios': 'TextEdit', 'extensao': 'TextEdit', });
lyr_adutoras_demanda_02_01_24_dup_34.set('fieldImages', {'Name': 'TextEdit', 'Barragens': 'TextEdit', 'Etapa': 'TextEdit', 'Municipios': 'TextEdit', 'extensao': 'TextEdit', });
lyr_comunidades_beneficiadas_PISF_leg_dup_35.set('fieldImages', {'geometriaa': 'Range', 'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'grupo': 'TextEdit', 'ID': 'TextEdit', 'Número': 'TextEdit', 'Nome_da_co': 'TextEdit', 'Tipo_da_Co': 'TextEdit', 'Situação': 'TextEdit', 'Município': 'TextEdit', 'Região_de': 'TextEdit', 'Microregi': 'TextEdit', 'SISAR': 'TextEdit', 'Gerência': 'TextEdit', 'Gerênci_1': 'TextEdit', 'Distância': 'TextEdit', 'Escola_Rur': 'TextEdit', 'Quantidade': 'TextEdit', 'Populaçã': 'TextEdit', 'Imóveis_R': 'TextEdit', 'Consumo_de': 'TextEdit', 'Geração': 'TextEdit', 'Geraçã_1': 'TextEdit', 'Investimen': 'TextEdit', 'Investim_1': 'TextEdit', 'Acumulado': 'TextEdit', 'Escolas_at': 'TextEdit', 'Tipo_de_pr': 'TextEdit', 'Nome_do_pr': 'TextEdit', 'Sigla': 'TextEdit', 'CNPJ': 'TextEdit', 'Endereço': 'TextEdit', 'CEP': 'TextEdit', 'Telefone': 'TextEdit', 'Celular': 'TextEdit', 'Responsáv': 'TextEdit', 'Cargo_do_r': 'TextEdit', 'Telefone_d': 'TextEdit', 'Email_da_i': 'TextEdit', 'Pessoa_de': 'TextEdit', 'Cargo_da_p': 'TextEdit', 'CPF_da_pes': 'TextEdit', 'Email_da_p': 'TextEdit', 'Telefone_1': 'TextEdit', 'Famílias': 'TextEdit', 'Populaç_1': 'TextEdit', 'Família_1': 'TextEdit', 'Tem_posto': 'TextEdit', 'Tem_agente': 'TextEdit', 'Objeto_da': 'TextEdit', 'Diagnósti': 'TextEdit', 'Nº_de_cis': 'TextEdit', 'Nº_de_c_1': 'TextEdit', 'Concepçã': 'TextEdit', 'Fase_do_em': 'TextEdit', 'Programa': 'TextEdit', 'Tipo_de_ma': 'TextEdit', 'Distânc_1': 'TextEdit', 'Desnível': 'TextEdit', 'Qualidade': 'TextEdit', 'Controle_d': 'TextEdit', 'Disposiç': 'TextEdit', 'Consumo_pe': 'TextEdit', 'Ponto_de_e': 'TextEdit', 'Regularida': 'TextEdit', 'Forma_de_o': 'TextEdit', 'Ação_com': 'TextEdit', 'Endereç_1': 'TextEdit', 'Endereç_2': 'TextEdit', 'A_associac': 'TextEdit', 'Nome_da_as': 'TextEdit', 'Presidente': 'TextEdit', 'Ano_da_cri': 'TextEdit', 'CNPJ_da_as': 'TextEdit', 'CPF_do_pre': 'TextEdit', 'Telefone_2': 'TextEdit', 'Municíp_1': 'TextEdit', 'Tem_plano': 'TextEdit', 'Tem_plan_1': 'TextEdit', 'Tem_plan_2': 'TextEdit', 'Nº_da_lei': 'TextEdit', 'Nº_da_l_1': 'TextEdit', 'Nº_da_l_2': 'TextEdit', 'Disposi_1': 'TextEdit', 'O_múnicí': 'TextEdit', 'Lei_que_cr': 'TextEdit', 'Instalaç': 'TextEdit', 'Destino_es': 'TextEdit', 'Tratamento': 'TextEdit', 'Tipo_do_pr': 'TextEdit', 'Nome_do__1': 'TextEdit', 'Cnpj_do_pr': 'TextEdit', 'Sigla_do_p': 'TextEdit', 'Municíp_2': 'TextEdit', 'Telefone_3': 'TextEdit', 'Status_da': 'TextEdit', 'Modelo_de': 'TextEdit', 'Coordenada': 'TextEdit', 'Coordena_1': 'TextEdit', 'Custo_Águ': 'TextEdit', 'Custo_Ener': 'TextEdit', 'Custo_Trat': 'TextEdit', 'Custo_Oper': 'TextEdit', 'Custo_Manu': 'TextEdit', 'Custo_Admi': 'TextEdit', });
lyr_sedes_beneficiadas_PISF_leg_dup_36.set('fieldImages', {'geometriaa': 'TextEdit', 'nome': 'TextEdit', 'geocodigo': 'TextEdit', });
lyr_barragens_SRHS_3_dup_37.set('fieldImages', {'Barragem': 'TextEdit', 'Status': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_barragens_SRHS_38.set('fieldImages', {'Barragem': 'TextEdit', 'Status': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_barragens_PISF_leg_dup_39.set('fieldImages', {'Código_SN': 'TextEdit', 'Nome_da_Ba': 'TextEdit', 'Nome_Secun': 'TextEdit', 'Uso_Princi': 'TextEdit', 'UF': 'TextEdit', 'Município': 'TextEdit', 'Categoria_': 'TextEdit', 'Dano_Poten': 'TextEdit', 'Nome_do_Em': 'TextEdit', 'Tipo_Empre': 'TextEdit', 'Órgão_Fi': 'TextEdit', 'Código_Ba': 'TextEdit', 'Regulada_p': 'TextEdit', 'Número_da': 'TextEdit', 'Possui_PAE': 'TextEdit', 'Possui_Pla': 'TextEdit', 'Possui_Rev': 'TextEdit', 'Data_da_Ú': 'TextEdit', 'Barragem_A': 'TextEdit', 'Altura_Fun': 'TextEdit', 'Altura_Ter': 'TextEdit', 'Capacidade': 'TextEdit', 'Compriment': 'TextEdit', 'Tipo_de_Ma': 'TextEdit', 'Uso_Comple': 'TextEdit', 'Classe_de_': 'TextEdit', 'Curso_Dág': 'TextEdit', 'Nome_Curso': 'TextEdit', 'Região_Hi': 'TextEdit', 'Unidade_de': 'TextEdit', 'Domínio': 'TextEdit', 'Data_da__1': 'TextEdit', 'Tipo_da_Ú': 'TextEdit', 'Nível_de_': 'TextEdit', 'Possui_Ecl': 'TextEdit', 'Fase_da_Vi': 'TextEdit', 'Fase_da__1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Completude': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_rio_ipojuca_40.set('fieldImages', {'nome': 'TextEdit', 'geometriaa': 'TextEdit', 'tipotrecho': 'TextEdit', 'navegavel': 'TextEdit', 'larguramed': 'TextEdit', 'regime': 'TextEdit', 'encoberto': 'TextEdit', });
lyr_adutora_siriji_41.set('fieldImages', {'FID': 'Range', 'adt_sr': 'Range', 'gid': 'Range', 'adt_id': 'Range', 'adt_status': 'TextEdit', 'adt_nm_adu': 'TextEdit', 'adt_ramal': 'TextEdit', 'adt_uf': 'TextEdit', 'adt_sg_reg': 'TextEdit', 'adt_sis_id': 'TextEdit', 'adt_tipo': 'TextEdit', 'adt_finali': 'TextEdit', 'adt_cd_epp': 'TextEdit', });
lyr_adutora_pirapama_42.set('fieldImages', {'FID': 'Range', 'adt_sr': 'Range', 'gid': 'Range', 'adt_id': 'Range', 'adt_status': 'TextEdit', 'adt_nm_adu': 'TextEdit', 'adt_ramal': 'TextEdit', 'adt_uf': 'TextEdit', 'adt_sg_reg': 'TextEdit', 'adt_sis_id': 'TextEdit', 'adt_tipo': 'TextEdit', 'adt_finali': 'TextEdit', 'adt_cd_epp': 'TextEdit', });
lyr_adutoras_demanda_02_01_24_43.set('fieldImages', {'Name': 'TextEdit', 'Barragens': 'TextEdit', 'Etapa': 'TextEdit', 'Municipios': 'TextEdit', 'extensao': '', });
lyr_ETA_suape_44.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_suape_45.set('fieldImages', {'id': 'TextEdit', 'Nome': '', });
lyr_sedes_PE_demanda_02_01_24_46.set('fieldImages', {'geometriaa': 'TextEdit', 'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Grupo': 'TextEdit', });
lyr_barragens_exist_demanda_02_01_24_47.set('fieldImages', {'BARRAGEM': 'TextEdit', 'BACIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ID': 'TextEdit', 'NOME': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_barragens_demanda_02_01_24_48.set('fieldImages', {'Barragem': 'TextEdit', 'Status': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'Objetivo': 'TextEdit', });
lyr_municipios_PISF_fora_PE_leg_dup_2.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA': 'no label', 'AREA_KM2': 'no label', });
lyr_rio_sao_francisco_dup_3.set('fieldLabels', {'gid': 'no label', 'esp_cd': 'no label', 'cod_snisb': 'no label', 'cod_sar': 'no label', 'nmoriginal': 'no label', 'nmalternat': 'no label', 'nmgenerico': 'no label', 'nmligacao': 'no label', 'nmespecifi': 'no label', 'detipomass': 'no label', 'dedominial': 'no label', 'dedominio': 'no label', 'defiscaliz': 'no label', 'nmemp': 'no label', 'fonmemp': 'no label', 'dtreserv': 'no label', 'fodtreserv': 'no label', 'nuvolumhm3': 'no label', 'fonuvolume': 'no label', 'nuperimkm': 'no label', 'nuareakm2': 'no label', 'nuareaha': 'no label', 'nucompgeom': 'no label', 'usoprinc': 'no label', 'fousoprinc': 'no label', 'detipoapr': 'no label', 'detipomda': 'no label', 'salinidade': 'no label', 'regime': 'no label', 'nmriocomp': 'no label', 'nmufe': 'no label', 'nmmun': 'no label', 'defonte': 'no label', 'desatelite': 'no label', 'deversao': 'no label', 'deobs': 'no label', 'nuvzreg': 'no label', 'nuvzlago': 'no label', 'nuvzdeflu': 'no label', 'cdtipooper': 'no label', 'detipooper': 'no label', 'fovzlago': 'no label', 'fovzdeflu': 'no label', 'fovzreg': 'no label', 'cobarprin': 'no label', 'cotrecho': 'no label', 'nuvzrecebe': 'no label', 'nuvztransf': 'no label', 'deobsvazao': 'no label', 'cocda2013': 'no label', 'cocda2017': 'no label', });
lyr_serro_azul_obras_leg_dup_4.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_adutoras_agreste_existentes_leg_dup_5.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_adutora_pirangi_leg_dup_6.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_adutora_panelas_II_leg_dup_7.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_serro_azul_existente_leg_dup_8.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_adutora_alto_capibaribe_leg_dup_9.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_SI_agreste_2_etapa_leg_dup_10.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_SI_agreste_1_etapa_leg_dup_11.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_SI_agreste_1_etapa_obra_leg_dup_12.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_adutoras_moxoto_leg_dup_13.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_ramal_agreste_leg_dup_14.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_adutoras_sertao_2_leg_dup_15.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_SI_pajeu_leg_dup_16.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_SI_pajeu_duplicacao_leg_dup_17.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_adutora_salgueiro_leg_dup_18.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_SI_salgueiro_leg_dup_19.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_sistema_adutor_salgueiro_leg_dup_20.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_adutora_negreiros_reforco_oeste_leg_dup_21.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_adutora_chapeu_reforco_oeste_leg_dup_22.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_ramal_entremontes_leg_dup_23.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_SI_oeste_leg_dup_24.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_SI_oeste_duplicacao_leg_dup_25.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_SI_afranio_dormentes_leg_dup_26.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_eixo_leste_leg_dup_27.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'status': 'no label', 'uf': 'no label', 'tipo': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_eixo_norte_leg_dup_28.set('fieldLabels', {'nome': 'no label', 'tipo': 'no label', 'id': 'no label', 'status': 'no label', 'uf': 'no label', 'finalidade': 'no label', 'extensao': 'no label', });
lyr_adutora_siriji_dup_29.set('fieldLabels', {'FID': 'no label', 'adt_sr': 'no label', 'gid': 'no label', 'adt_id': 'no label', 'adt_status': 'no label', 'adt_nm_adu': 'no label', 'adt_ramal': 'no label', 'adt_uf': 'no label', 'adt_sg_reg': 'no label', 'adt_sis_id': 'no label', 'adt_tipo': 'no label', 'adt_finali': 'no label', 'adt_cd_epp': 'no label', });
lyr_adutora_pirapama_dup_30.set('fieldLabels', {'FID': 'no label', 'adt_sr': 'no label', 'gid': 'no label', 'adt_id': 'no label', 'adt_status': 'no label', 'adt_nm_adu': 'no label', 'adt_ramal': 'no label', 'adt_uf': 'no label', 'adt_sg_reg': 'no label', 'adt_sis_id': 'no label', 'adt_tipo': 'no label', 'adt_finali': 'no label', 'adt_cd_epp': 'no label', });
lyr_SI_Engenho_Maranhao_31.set('fieldLabels', {'Name': 'no label', 'Barragens': 'no label', 'Etapa': 'no label', 'Municipios': 'no label', 'extensao': 'no label', });
lyr_SI_Metropolitana_Norte_32.set('fieldLabels', {'Name': 'no label', 'Barragens': 'no label', 'Etapa': 'no label', 'Municipios': 'no label', 'extensao': 'no label', });
lyr_SI_Carpina_33.set('fieldLabels', {'Name': 'no label', 'Barragens': 'no label', 'Etapa': 'no label', 'Municipios': 'no label', 'extensao': 'no label', });
lyr_adutoras_demanda_02_01_24_dup_34.set('fieldLabels', {'Name': 'no label', 'Barragens': 'no label', 'Etapa': 'no label', 'Municipios': 'no label', 'extensao': 'no label', });
lyr_comunidades_beneficiadas_PISF_leg_dup_35.set('fieldLabels', {'geometriaa': 'no label', 'nome': 'no label', 'geocodigo': 'no label', 'grupo': 'no label', 'ID': 'no label', 'Número': 'no label', 'Nome_da_co': 'no label', 'Tipo_da_Co': 'no label', 'Situação': 'no label', 'Município': 'no label', 'Região_de': 'no label', 'Microregi': 'no label', 'SISAR': 'no label', 'Gerência': 'no label', 'Gerênci_1': 'no label', 'Distância': 'no label', 'Escola_Rur': 'no label', 'Quantidade': 'no label', 'Populaçã': 'no label', 'Imóveis_R': 'no label', 'Consumo_de': 'no label', 'Geração': 'no label', 'Geraçã_1': 'no label', 'Investimen': 'no label', 'Investim_1': 'no label', 'Acumulado': 'no label', 'Escolas_at': 'no label', 'Tipo_de_pr': 'no label', 'Nome_do_pr': 'no label', 'Sigla': 'no label', 'CNPJ': 'no label', 'Endereço': 'no label', 'CEP': 'no label', 'Telefone': 'no label', 'Celular': 'no label', 'Responsáv': 'no label', 'Cargo_do_r': 'no label', 'Telefone_d': 'no label', 'Email_da_i': 'no label', 'Pessoa_de': 'no label', 'Cargo_da_p': 'no label', 'CPF_da_pes': 'no label', 'Email_da_p': 'no label', 'Telefone_1': 'no label', 'Famílias': 'no label', 'Populaç_1': 'no label', 'Família_1': 'no label', 'Tem_posto': 'no label', 'Tem_agente': 'no label', 'Objeto_da': 'no label', 'Diagnósti': 'no label', 'Nº_de_cis': 'no label', 'Nº_de_c_1': 'no label', 'Concepçã': 'no label', 'Fase_do_em': 'no label', 'Programa': 'no label', 'Tipo_de_ma': 'no label', 'Distânc_1': 'no label', 'Desnível': 'no label', 'Qualidade': 'no label', 'Controle_d': 'no label', 'Disposiç': 'no label', 'Consumo_pe': 'no label', 'Ponto_de_e': 'no label', 'Regularida': 'no label', 'Forma_de_o': 'no label', 'Ação_com': 'no label', 'Endereç_1': 'no label', 'Endereç_2': 'no label', 'A_associac': 'no label', 'Nome_da_as': 'no label', 'Presidente': 'no label', 'Ano_da_cri': 'no label', 'CNPJ_da_as': 'no label', 'CPF_do_pre': 'no label', 'Telefone_2': 'no label', 'Municíp_1': 'no label', 'Tem_plano': 'no label', 'Tem_plan_1': 'no label', 'Tem_plan_2': 'no label', 'Nº_da_lei': 'no label', 'Nº_da_l_1': 'no label', 'Nº_da_l_2': 'no label', 'Disposi_1': 'no label', 'O_múnicí': 'no label', 'Lei_que_cr': 'no label', 'Instalaç': 'no label', 'Destino_es': 'no label', 'Tratamento': 'no label', 'Tipo_do_pr': 'no label', 'Nome_do__1': 'no label', 'Cnpj_do_pr': 'no label', 'Sigla_do_p': 'no label', 'Municíp_2': 'no label', 'Telefone_3': 'no label', 'Status_da': 'no label', 'Modelo_de': 'no label', 'Coordenada': 'no label', 'Coordena_1': 'no label', 'Custo_Águ': 'no label', 'Custo_Ener': 'no label', 'Custo_Trat': 'no label', 'Custo_Oper': 'no label', 'Custo_Manu': 'no label', 'Custo_Admi': 'no label', });
lyr_sedes_beneficiadas_PISF_leg_dup_36.set('fieldLabels', {'geometriaa': 'no label', 'nome': 'no label', 'geocodigo': 'no label', });
lyr_barragens_SRHS_3_dup_37.set('fieldLabels', {'Barragem': 'no label', 'Status': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', });
lyr_barragens_SRHS_38.set('fieldLabels', {'Barragem': 'no label', 'Status': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', });
lyr_barragens_PISF_leg_dup_39.set('fieldLabels', {'Código_SN': 'inline label - always visible', 'Nome_da_Ba': 'inline label - always visible', 'Nome_Secun': 'hidden field', 'Uso_Princi': 'inline label - always visible', 'UF': 'inline label - visible with data', 'Município': 'inline label - always visible', 'Categoria_': 'inline label - always visible', 'Dano_Poten': 'inline label - visible with data', 'Nome_do_Em': 'inline label - visible with data', 'Tipo_Empre': 'inline label - visible with data', 'Órgão_Fi': 'inline label - visible with data', 'Código_Ba': 'inline label - always visible', 'Regulada_p': 'inline label - always visible', 'Número_da': 'inline label - always visible', 'Possui_PAE': 'hidden field', 'Possui_Pla': 'hidden field', 'Possui_Rev': 'hidden field', 'Data_da_Ú': 'hidden field', 'Barragem_A': 'hidden field', 'Altura_Fun': 'hidden field', 'Altura_Ter': 'hidden field', 'Capacidade': 'hidden field', 'Compriment': 'hidden field', 'Tipo_de_Ma': 'hidden field', 'Uso_Comple': 'hidden field', 'Classe_de_': 'hidden field', 'Curso_Dág': 'hidden field', 'Nome_Curso': 'hidden field', 'Região_Hi': 'hidden field', 'Unidade_de': 'hidden field', 'Domínio': 'hidden field', 'Data_da__1': 'hidden field', 'Tipo_da_Ú': 'hidden field', 'Nível_de_': 'hidden field', 'Possui_Ecl': 'hidden field', 'Fase_da_Vi': 'hidden field', 'Fase_da__1': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - always visible', 'Completude': 'inline label - always visible', 'Legenda': 'no label', });
lyr_rio_ipojuca_40.set('fieldLabels', {'nome': 'no label', 'geometriaa': 'no label', 'tipotrecho': 'no label', 'navegavel': 'no label', 'larguramed': 'no label', 'regime': 'no label', 'encoberto': 'no label', });
lyr_adutora_siriji_41.set('fieldLabels', {'FID': 'no label', 'adt_sr': 'no label', 'gid': 'no label', 'adt_id': 'no label', 'adt_status': 'no label', 'adt_nm_adu': 'no label', 'adt_ramal': 'no label', 'adt_uf': 'no label', 'adt_sg_reg': 'no label', 'adt_sis_id': 'no label', 'adt_tipo': 'no label', 'adt_finali': 'no label', 'adt_cd_epp': 'no label', });
lyr_adutora_pirapama_42.set('fieldLabels', {'FID': 'no label', 'adt_sr': 'no label', 'gid': 'no label', 'adt_id': 'no label', 'adt_status': 'no label', 'adt_nm_adu': 'no label', 'adt_ramal': 'no label', 'adt_uf': 'no label', 'adt_sg_reg': 'no label', 'adt_sis_id': 'no label', 'adt_tipo': 'no label', 'adt_finali': 'no label', 'adt_cd_epp': 'no label', });
lyr_adutoras_demanda_02_01_24_43.set('fieldLabels', {'Name': 'no label', 'Barragens': 'no label', 'Etapa': 'no label', 'Municipios': 'no label', 'extensao': 'no label', });
lyr_ETA_suape_44.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', });
lyr_suape_45.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', });
lyr_sedes_PE_demanda_02_01_24_46.set('fieldLabels', {'geometriaa': 'no label', 'nome': 'no label', 'geocodigo': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'Grupo': 'no label', });
lyr_barragens_exist_demanda_02_01_24_47.set('fieldLabels', {'BARRAGEM': 'no label', 'BACIA': 'no label', 'MUNICIPIO': 'no label', 'ID': 'no label', 'NOME': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Legenda': 'no label', });
lyr_barragens_demanda_02_01_24_48.set('fieldLabels', {'Barragem': 'no label', 'Status': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'Objetivo': 'no label', });
lyr_barragens_demanda_02_01_24_48.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});