var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CH4')
  .select('CH4_column_volume_mixing_ratio_dry_air')
  .filterDate('2024-01-01', '2024-03-30');

var methaneImage = collection.mean();

var band_viz = {
  min: 1800,
  max: 2000,
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
};

Map.addLayer(methaneImage, band_viz, 'S5P CH4');
Map.setCenter(-100.0, 40.0, 4);

var exportRegion = ee.Geometry.BBox(-180, -90, 180, 90);

Export.image.toDrive({
  image: methaneImage.clip(exportRegion),
  description: 'Methane_Export',
  scale: 7000,
  region: exportRegion,
  fileFormat: 'GeoTIFF'
});