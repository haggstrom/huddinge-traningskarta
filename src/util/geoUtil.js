import proj4 from "proj4";
import { register } from "ol/proj/proj4";
import GeoJSON from "ol/format/GeoJSON";
import { createEmpty, extend } from "ol/extent";
import { buffer } from "ol/extent";
import { fromExtent } from "ol/geom/Polygon";
import Feature from "ol/Feature";

const geoUtil = {
  registerProjections: () => {
    // EPSG:4326 - WGS 84
    proj4.defs(
      "EPSG:4326",
      "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs "
    );

    // EPSG:3006 - SWEREF99 TM
    proj4.defs(
      "EPSG:3006",
      "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
    );

    // EPSG:3011 - SWEREF99 18 00
    proj4.defs(
      "EPSG:3011",
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
    );

    // EPSG:3857 - WGS84 Web Mercator
    proj4.defs(
      "EPSG:3857",
      "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs"
    );

    register(proj4);
  },

  getSortedFeatureName: (features) => {
    return [
      ...new Set(
        features.map((tf) => {
          return tf.getProperties()["name"];
        })
      ),
    ].sort();
  },

  readFeatures: (geoJson) => {
    return new GeoJSON().readFeatures(geoJson);
  },

  transformFeatures: (features, sourceProj, destProj) => {
    features.map((tf) => {
      return tf.getGeometry().transform(sourceProj, destProj);
    });
  },

  toFeatures: (geoJson, type) => {
    var features = geoUtil.readFeatures(geoJson);
    features.map((tf) => {
      return tf.setProperties({ type: type });
    });
    geoUtil.transformFeatures(features, "EPSG:3011", "EPSG:3006");
    return features;
  },

  bufferExtent: (extent, bufferValue) => {
    return buffer(extent, bufferValue);
  },

  getBufferedExtent: (feature, bufferVal) => {
    return geoUtil.bufferExtent(feature.getGeometry().getExtent(), bufferVal);
  },

  extentToFeature: (extent) => {
    const polygon = fromExtent(extent);
    var feature = new Feature({
      geometry: polygon,
    });
    return feature;
  },

  getExtentOfFeaturesByName: (features, name) => {
    var areaFeatures = features.filter(
      (tf) => tf.getProperties()["name"] === name
    );
    var extent = createEmpty();
    areaFeatures.forEach(function (feature) {
      extend(extent, feature.getGeometry().getExtent());
    });
    return extent;
  },
};
export default geoUtil;
