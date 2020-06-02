import React, { useState, useEffect } from "react";

import "ol/ol.css";
import "antd/dist/antd.css";
import "./css/App.css";
import "./css/react-geo.css";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOsm from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { SimpleButton, MapComponent } from "@terrestris/react-geo";
import { Drawer } from "antd";

import tracks from "./data/tracks.json";
import outdoorGyms from "./data/outdoorGyms.json";
import huddingeJson from "./data/huddinge.json";
import TrainingLocationList from "./components/TrainingLocationList";

import geoUtil from "./util/geoUtil";
import mapUtil from "./util/mapUtil";

import SimplePopup from "./components/SimplePopup";
import Select from "ol/interaction/Select";

import Overlay from "ol/Overlay";
import { pointerMove } from "ol/events/condition";
import {defaults} from 'ol/interaction';

import styles from "./util/styles";

import AuthorPanel from "./components/AuthorPanel";

const POPUP_ID = "my-popup";

geoUtil.registerProjections();

const osmLayer = new OlLayerTile({
  source: new OlSourceOsm(),
});

const view = new OlView({
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
var interactions = defaults({altShiftDragRotate:false, pinchRotate:false});
const map = new OlMap({
  view: view,
  layers: [osmLayer],
  interactions: interactions,
});

const kommunLayer = new VectorLayer({
  source: new VectorSource({}),
  style: styles.kommunStyle,
});

const kommunFeature = mapUtil.getHuddingeKommunFeature(huddingeJson);
kommunLayer.getSource().addFeature(kommunFeature);
map.addLayer(kommunLayer);
map.on("click", (e) => {
  console.log(e.coordinate);
  console.log(map.getOverlays());
});

const select = new Select({
  condition: pointerMove,
  style: styles.hoverStyleFunction,
  layers: function (layer) {
    //console.log(layer);
    return (
      (layer.get("layerId") && layer.get("layerId") === "gym-layer") ||
      layer.get("layerId") === "track-layer"
    );
  },
});

map.addInteraction(select);

const popup = new Overlay({});

const trackLayer = new VectorLayer({
  layerId: "track-layer",
  source: new VectorSource({}),
});

const trackFeatures = geoUtil.toFeatures(tracks, "track");
mapUtil.setStylesOnTracks(trackFeatures);
trackLayer.getSource().addFeatures(trackFeatures);
map.addLayer(trackLayer);

const outDoorGymLayer = new VectorLayer({
  layerId: "gym-layer",
  source: new VectorSource({}),
});

const outDoorGymsFeatures = geoUtil.toFeatures(outdoorGyms, "gym");
mapUtil.setIconOnGymFeatures(outDoorGymsFeatures);

outDoorGymLayer.getSource().addFeatures(outDoorGymsFeatures);
map.addLayer(outDoorGymLayer);

const trackNames = geoUtil.getSortedFeatureName(trackFeatures);
const gymNames = geoUtil.getSortedFeatureName(outDoorGymsFeatures);

const centerOnTrack = (trackName) => {
  var extent = geoUtil.getExtentOfFeaturesByName(trackFeatures, trackName);
  console.log(map.getView());
  map.getView().fit(extent, { padding: [200, 20, 200, 20] });
};

const centerOnGym = (gymName) => {
  var extent = geoUtil.getExtentOfFeaturesByName(outDoorGymsFeatures, gymName);
  console.log(map.getView());
  map.getView().fit(extent);
};

function App() {
  useEffect(() => {
    // Run! Like go get some data from an API.
  }, []);

  const [visible, setVisible] = useState(false);
  const [hoveredFeatureName, setHoveredFeatureName] = useState("");
  const [hoveredFeatureType, setHoveredFeatureType] = useState("");

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  select.on("select", function (e) {
    // console.log( e.selected);
    var feature = e.selected[0];
    if (feature) {
      // console.log( feature.getProperties()["name"]);
      if (!popup.getElement()) {
        popup.setElement(document.getElementById(POPUP_ID));
        map.addOverlay(popup);
      }

      setHoveredFeatureName(feature.getProperties()["name"]);
      const typeName =
        feature.getProperties()["type"] === "gym" ? "Utegym" : "Elljusspår";
      setHoveredFeatureType(typeName);
      popup.setPosition(e.mapBrowserEvent.coordinate);
    }
    var deselected = e.deselected[0];
    if (deselected) {
      popup.setPosition(undefined);
    }

    // console.log( e.deselected);
    // console.log( e.type);
    // console.log( e.target);
    // console.log( e.mapBrowserEvent.coordinate);
  });

  return (
    <div className="App">
      <MapComponent map={map} />

      <SimplePopup
        popupId={POPUP_ID}
        title={hoveredFeatureType}
        text={hoveredFeatureName}
      />

      <SimpleButton
        title="Visa Träningsplatser"
        className="showDrawerButton"
        type="primary"
        onClick={toggleDrawer}
      >
        Träningsplatser
      </SimpleButton>

      <Drawer
        title="Träningsplatser"
        placement="right"
        onClose={toggleDrawer}
        visible={visible}
        mask={false}
        footer={<AuthorPanel />}
      >
        <TrainingLocationList
          key="1"
          header="Elljusspår"
          locationNames={trackNames}
          onLocationClicked={centerOnTrack}
        />
        <TrainingLocationList
          key="2"
          header="Utegym"
          locationNames={gymNames}
          onLocationClicked={centerOnGym}
        />
      </Drawer>
    </div>
  );
}

export default App;
