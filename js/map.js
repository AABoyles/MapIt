var map;

function init() {
  map = new OpenLayers.Map('map');
  map.addLayers([
    new OpenLayers.Layer.OSM("Open Street Map"),
    /*TODO: WMS uses a default projection ("EPSG:4326") which doesn't have a direct mapping to the Spherical Mercator of OSM 
     * and Google. Figure out how to project it.*/
    //new OpenLayers.Layer.WMS("Web Map Service","http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'}),
    new OpenLayers.Layer.Google("Google Streets"),
  ]);
  var drawingLayer = new OpenLayers.Layer.Vector("Drawing Layer")
  map.addLayer(drawingLayer);
  map.addControls([
  	new OpenLayers.Control.LayerSwitcher(),
  	new OpenLayers.Control.EditingToolbar(drawingLayer)
  ]);
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
        