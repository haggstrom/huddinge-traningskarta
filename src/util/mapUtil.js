import geoUtil from "./geoUtil";
import Polygon from "ol/geom/Polygon";
import Feature from "ol/Feature";
import styles from "./styles";
import OlView from "ol/View";
import { defaults } from "ol/interaction";
import OlMap from "ol/Map";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOsm from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

export const GYM_LAYER_ID = "gym-layer";
export const TRACK_LAYER_ID = "track-layer";

const mapUtil = {
  createView: () => {
    return new OlView({
      projection: "EPSG:3006",
      center: [672382.9310966722, 6567779.94859146],
      zoom: 12,
      maxZoom: 20,
      extent: [
        // extent = kommun extent buff 75000
        655435.1179635252,
        6552348.911293099,
        689330.7442298192,
        6583210.985889821,
      ],
    });
  },

  createMap: (view) => {
    const interactions = defaults({
      altShiftDragRotate: false,
      pinchRotate: false,
    });
    return new OlMap({
      view: view,
      layers: [
        new OlLayerTile({
          source: new OlSourceOsm(),
        }),
      ],
      interactions: interactions,
    });
  },

  createHuddingeLayer: (huddingeFeature) => {
    const huddingeLayer = new VectorLayer({
      source: new VectorSource({}),
      style: styles.kommunStyle,
    });
    huddingeLayer.getSource().addFeature(huddingeFeature);
    return huddingeLayer;
  },

  createGymLayer: (gymFeatures) => {
    const outDoorGymLayer = new VectorLayer({
      layerId: GYM_LAYER_ID,
      source: new VectorSource({}),
    });

    mapUtil.setIconOnGymFeatures(gymFeatures);
    outDoorGymLayer.getSource().addFeatures(gymFeatures);
    return outDoorGymLayer;
  },

  createTrackLayer: (trackFeatures) => {
    const trackLayer = new VectorLayer({
      layerId: TRACK_LAYER_ID,
      source: new VectorSource({}),
    });

    mapUtil.setStylesOnTracks(trackFeatures);
    trackLayer.getSource().addFeatures(trackFeatures);
    return trackLayer;
  },

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

  getHuddingeFeature: (geoJson) => {
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
