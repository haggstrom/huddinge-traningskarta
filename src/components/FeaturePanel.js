import React from "react";
import { List, Typography } from "antd";
import { Collapse } from "antd";
const { Panel } = Collapse;

const FeaturePanel = ({ headerText, featureName, onFeatureClicked }) => {
  return (
    <>
      <Collapse
        className="feature-panel"
        onChange={() => console.log("collapse!")}
      >
        <Panel header={headerText} className="track-panel" key="2">
          {/*<Divider orientation="left">Elljusspår</Divider>*/}
          <List
            /*header={<div>Header</div>}*/
            /*footer={<div>Footer</div>}*/
            /*bordered*/
            dataSource={featureName}
            renderItem={(areaName) => (
              <List.Item>
                <Typography.Text
                  className="feature-name-text"
                  onClick={() => onFeatureClicked(areaName)}
                >
                  {areaName}
                </Typography.Text>
              </List.Item>
            )}
          />
        </Panel>
      </Collapse>
    </>
  );
};

export default FeaturePanel;
