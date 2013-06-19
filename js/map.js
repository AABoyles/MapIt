var map;
var bingKey = "Au7WHSbnl7QjoAn2db3TJNyCF-xf5ttJyZuVcc56feFlA_Inivd2T0V3BNgbNGVs";

window.onload = function() {
	map = new OpenLayers.Map('map');

	var osm = new OpenLayers.Layer.OSM("Open Street Map");
	var googleRoads = new OpenLayers.Layer.Google("Google Streets");
	var bingRoads = new OpenLayers.Layer.Bing({
		name : "Bing Roads",
		key : bingKey,
		type : "Road"
	});
	var googlePhysical = new OpenLayers.Layer.Google("Google Physical", {
		type : google.maps.MapTypeId.TERRAIN
	});
	var googleHybrid = new OpenLayers.Layer.Google("Google Hybrid", {
		type : google.maps.MapTypeId.HYBRID
	});
	var bingHybrid = new OpenLayers.Layer.Bing({
		name : "Bing Hybrid",
		key : bingKey,
		type : "AerialWithLabels"
	});
	var googleAerial = new OpenLayers.Layer.Google("Google Satellite", {
		type : google.maps.MapTypeId.SATELLITE
	});
	var bingAerial = new OpenLayers.Layer.Bing({
		name : "Bing Aerial",
		key : bingKey,
		type : "Aerial"
	});

	map.addLayers([osm, googleRoads, bingRoads, googlePhysical, googleHybrid, bingHybrid, googleAerial, bingAerial]);

	var drawingLayer = new OpenLayers.Layer.Vector("Drawing Layer")
	map.addLayer(drawingLayer);

	map.addControls([new OpenLayers.Control.LayerSwitcher(), new OpenLayers.Control.EditingToolbar(drawingLayer)]);

	map.zoomToMaxExtent();
};
