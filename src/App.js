import React, { useState } from "react";

import "./App.css";
import "ol/ol.css";
import "antd/dist/antd.css";
import "./react-geo.css";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOsm from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Style, Icon, Fill, Stroke } from "ol/style";
import { SimpleButton, MapComponent } from "@terrestris/react-geo";
import { Drawer } from "antd";

import tracks from "./data/tracks.json";
import outdoorGyms from "./data/outdoorGyms.json";
import huddingeJson from "./data/huddinge.json";
import FeaturePanel from "./components/FeaturePanel";

import gymImg from "./img/gym.png";

import geoUtil from "./util/geoUtil";
import mapUtil from "./util/mapUtil";

geoUtil.registerProjections();

const osmLayer = new OlLayerTile({
  source: new OlSourceOsm(),
});

const view = new OlView({
  projection: "EPSG:3006",
  center: [672382.9310966722, 6567779.94859146],
  zoom: 12,
  maxZoom: 20,
  extent: [ // extent = kommun extent buff 75000
    655435.1179635252,
    6552348.911293099,
    689330.7442298192,
    6583210.985889821,
  ],
});

const map = new OlMap({
  view: view,
  layers: [osmLayer],
});

var trackLayer = new VectorLayer({
  source: new VectorSource({}),
  style: new Style({
    fill: new Fill({
      color: "red",
    }),
    stroke: new Stroke({
      color: "black",
      lineDash: [2, 4],
      width: 2,
      lineDashOffset: 0,
    }),
  }),
});

const trackFeatures = geoUtil.toFeatures(tracks);
trackLayer.getSource().addFeatures(trackFeatures);
map.addLayer(trackLayer);

var iconStyle = new Style({
  image: new Icon({
    src: gymImg,
    scale: 1,
  }),
});

var outDoorGymLayer = new VectorLayer({
  source: new VectorSource({}),
});

const outDoorGymsFeatures = geoUtil.toFeatures(outdoorGyms);
outDoorGymsFeatures.map((gym) => gym.setStyle(iconStyle));
outDoorGymLayer.getSource().addFeatures(outDoorGymsFeatures);
map.addLayer(outDoorGymLayer);

var kommunLayer = new VectorLayer({
  source: new VectorSource({}),
  style: new Style({
    stroke: new Stroke({
      color: "grey",
      width: 3,
    }),
    fill: new Fill({
      color: "rgba(232, 232, 232, 0.5)",
    }),
  }),
});

var kommunFeature = mapUtil.getHuddingeKommunFeature(huddingeJson);
kommunLayer.getSource().addFeature(kommunFeature);
map.addLayer(kommunLayer);

/*
map.on("click", (e) => {
  console.log(e.coordinate);
});
*/

function App() {
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const trackNames = geoUtil.getSortedFeatureName(trackFeatures);
  const gymNames = geoUtil.getSortedFeatureName(outDoorGymsFeatures);

  const centerOnTrack = (trackName) => {
    var extent = geoUtil.getExtentOfFeaturesByName(trackFeatures, trackName);
    view.fit(extent, { padding: [200, 20, 200, 20] });
  };

  const centerOnGym = (gymName) => {
    var extent = geoUtil.getExtentOfFeaturesByName(
      outDoorGymsFeatures,
      gymName
    );
    view.fit(extent, { padding: [200, 20, 200, 20] });
  };

  return (
    <div className="App">
      <MapComponent map={map} />
      <SimpleButton
        style={{ position: "fixed", top: "30px", right: "30px" }}
        onClick={toggleDrawer}
        icon="bars"
      />
      <Drawer
        title="Träningskarta"
        placement="right"
        onClose={toggleDrawer}
        visible={visible}
        mask={false}
      >
        <FeaturePanel
          headerText="Elljusspår"
          featureName={trackNames}
          onFeatureClicked={centerOnTrack}
        />
        <FeaturePanel
          headerText="Utegym"
          featureName={gymNames}
          onFeatureClicked={centerOnGym}
        />
      </Drawer>
    </div>
  );
}

export default App;
