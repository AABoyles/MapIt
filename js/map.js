var map;

function init() {
  map = new OpenLayers.Map('map');
  map.addLayers([
  	new OpenLayers.Layer.OSM("Open Street Map"),
		new OpenLayers.Layer.WMS( "World Map Service",
			"http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'}),
		new OpenLayers.Layer.Google("Google Streets"),
  ]);
  map.addControl(new OpenLayers.Control.LayerSwitcher());
  //map.setCenter(new OpenLayers.LonLat(0, 0).transform(
  	//new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject()), 1);
  map.zoomToMaxExtent();
}

function addUrl(fileurl) {
	map.addLayer(new OpenLayers.Layer.Vector("KML", {
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
      url: fileurl,
      format: new OpenLayers.Format.KML({
        extractStyles: true, 
        extractAttributes: true
      })
    })
  }));
  //new OpenLayers.Layer.GeoRSS( "http://openlayers.org/dev/examples/georss.xml" ));
}
        