import React, { useState } from "react";

import "ol/ol.css";
import "antd/dist/antd.css";
import "./css/App.css";
import "./css/react-geo.css";

import { SimpleButton, MapComponent } from "@terrestris/react-geo";
import { Drawer } from "antd";
import tracks from "./data/tracks.json";
import outdoorGyms from "./data/outdoorGyms.json";
import huddingeJson from "./data/huddinge.json";
import TrainingLocationList from "./components/TrainingLocationList";
import geoUtil from "./util/geoUtil";
import mapUtil, { GYM_LAYER_ID, TRACK_LAYER_ID } from "./util/mapUtil";
import SimplePopup from "./components/SimplePopup";
import Select from "ol/interaction/Select";
import Overlay from "ol/Overlay";
import { pointerMove } from "ol/events/condition";
import styles from "./util/styles";
import AuthorPanel from "./components/AuthorPanel";
import { isMobile } from "react-device-detect";

const POPUP_ID = "my-popup";

geoUtil.registerProjections();

const view = mapUtil.createView();
const map = mapUtil.createMap(view);

const isGymOrTrackLayer = (layer) => {
  return (
    layer.get("layerId") &&
    (layer.get("layerId") === GYM_LAYER_ID ||
      layer.get("layerId") === TRACK_LAYER_ID)
  );
};

const select = new Select({
  condition: pointerMove,
  style: styles.hoverStyleFunction,
  layers: function (layer) {
    return isGymOrTrackLayer(layer);
  },
});
map.addInteraction(select);

const huddingeFeature = mapUtil.getHuddingeFeature(huddingeJson);
const huddingeLayer = mapUtil.createHuddingeLayer(huddingeFeature);
map.addLayer(huddingeLayer);

const trackFeatures = geoUtil.toFeatures(tracks, "track");
const trackLayer = mapUtil.createTrackLayer(trackFeatures);
map.addLayer(trackLayer);

const gymFeatures = geoUtil.toFeatures(outdoorGyms, "gym");
const gymLayer = mapUtil.createGymLayer(gymFeatures);
map.addLayer(gymLayer);

const popup = new Overlay({});

const onPopupClose = () => {
  popup.setPosition(undefined);
};

function App() {
  const [visible, setVisible] = useState(false);
  const [hoveredFeatureName, setHoveredFeatureName] = useState("");
  const [hoveredFeatureType, setHoveredFeatureType] = useState("");

  const trackNames = geoUtil.getSortedFeatureName(trackFeatures);
  const gymNames = geoUtil.getSortedFeatureName(gymFeatures);
  
  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const centerOnTrack = (trackName) => {
    if (isMobile) {
      setVisible(!visible);
    }
    var extent = geoUtil.getExtentOfFeaturesByName(trackFeatures, trackName);
    var buffered = geoUtil.bufferExtent(extent, 200);
    map.getView().fit(buffered);
  };

  const centerOnGym = (gymName) => {
    if (isMobile) {
      setVisible(!visible);
    }
    var extent = geoUtil.getExtentOfFeaturesByName(gymFeatures, gymName);
    var buffered = geoUtil.bufferExtent(extent, 100);
    map.getView().fit(buffered);
  };

  map.on("click", function (evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel, (feature, layer) => {
      if (isGymOrTrackLayer(layer)) {
        return feature;
      }
    });
    if (feature) {
      if (!popup.getElement()) {
        popup.setElement(document.getElementById(POPUP_ID));
        map.addOverlay(popup);
      }
      setHoveredFeatureName(feature.getProperties()["name"]);
      const typeName =
        feature.getProperties()["type"] === "gym" ? "Utegym" : "Elljusspår";
      setHoveredFeatureType(typeName);
      popup.setPosition(evt.coordinate);
    } else {
      popup.setPosition(undefined);
    }
  });

  return (
    <div className="App">
      <MapComponent map={map} />

      <SimplePopup
        popupId={POPUP_ID}
        title={hoveredFeatureType}
        text={hoveredFeatureName}
        onClose={onPopupClose}
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
        title="Träningsplatser i Huddinge"
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
