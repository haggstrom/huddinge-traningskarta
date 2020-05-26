import geoUtil from "./geoUtil";
import Polygon from "ol/geom/Polygon";
import Feature from "ol/Feature";

const mapUtil = {

  getHuddingeKommunFeature: (geoJson) => {
    const features = geoUtil.readFeatures(geoJson);
    geoUtil.transformFeatures(features, "EPSG:4326", "EPSG:3006");
    
    // Translate to better fit map
    features[0].getGeometry().translate(-100,-170);
    const featureExtent = geoUtil.getBufferedExtent(features[0], 15000);
    const extentFeature = geoUtil.extentToFeature(featureExtent);
    const linearRing = features[0].getGeometry().getLinearRing();

    const polygon = new Polygon(extentFeature.getGeometry().getCoordinates());
    polygon.appendLinearRing(linearRing);
    var polygonFeature = new Feature({
      geometry: polygon,
    });
    return polygonFeature;
  },
};

export default mapUtil;
