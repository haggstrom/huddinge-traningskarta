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
import { Style, Fill, Stroke } from "ol/style";
import { SimpleButton, MapComponent } from "@terrestris/react-geo";
import { Drawer, List, Typography } from "antd";
import { Collapse } from "antd";

import tracks from "./data/tracks";
import geoUtil from "./geoUtil";

const { Panel } = Collapse;

geoUtil.registerProjections();

const osmLayer = new OlLayerTile({
  source: new OlSourceOsm(),
});

const view = new OlView({
  projection: "EPSG:3006",
  center: [669922, 6570167], // EPSG:3011 - SWEREF99 18 00,
  zoom: 16,
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

  const areaNames = geoUtil.getSortedAreaName(trackFeatures);

  const centerOnTrack = (areaName) => {
    var extent = geoUtil.getTrackExtent(trackFeatures, areaName);
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
        <Collapse onChange={() => console.log("collapse!")}>
          <Panel header="Elljusspår" className="track-panel" key="1">
            {/*<Divider orientation="left">Elljusspår</Divider>*/}
            <List
              /*header={<div>Header</div>}*/
              /*footer={<div>Footer</div>}*/
              /*bordered*/
              dataSource={areaNames}
              renderItem={(areaName) => (
                <List.Item>
                  <Typography.Text onClick={() => centerOnTrack(areaName)}>
                    {areaName}
                  </Typography.Text>
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
      </Drawer>
    </div>
  );
}

export default App;
