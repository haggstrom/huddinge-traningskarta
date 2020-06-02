import geoUtil from "./geoUtil";
import Polygon from "ol/geom/Polygon";
import Feature from "ol/Feature";
import styles from "./styles";

const mapUtil = {
  setStylesOnTracks: (tracks) => {
    tracks.map((track) => {
      return track.setStyle(styles.trackStyles);
    });
  },

  setIconOnGymFeatures: (gymFeatures) => {
    const man = {
      icon: styles.manIconStyle,
      iconHover: styles.manSelectedIconStyle,
    };

    const woman = {
      icon: styles.womanIconStyle,
      iconHover: styles.womanSelectedIconStyle,
    };

    const randomOrderIcons = Math.random() >= 0.5 ? [man, woman] : [woman, man];

    gymFeatures.map((gym, index) => {
      var icons = randomOrderIcons[index % 2];
      gym.setProperties({ hoverStyle: icons.iconHover });
      return gym.setStyle([icons.icon]);
    });
  },

  getHuddingeKommunFeature: (geoJson) => {
    const features = geoUtil.readFeatures(geoJson);
    geoUtil.transformFeatures(features, "EPSG:4326", "EPSG:3006");

    // Translate to better fit map
    features[0].getGeometry().translate(-100, -170);
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
