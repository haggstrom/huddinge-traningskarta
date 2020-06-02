import React from "react";
import { List, Typography } from "antd";
import { Collapse } from "antd";
import styles from "../css/TrainingLocationList.module.css";
const { Panel } = Collapse;

const TrainingLocationList = ({
  key,
  header,
  locationNames,
  onLocationClicked,
}) => {
  return (
    <Collapse className={styles.trainingLocationCollapse}>
      <Panel header={header} className="trainingLocationPanel" key={key}>
        <List
          dataSource={locationNames}
          renderItem={(locationName) => (
            <List.Item>
              <Typography.Text
                className={styles.trainingLocationName}
                onClick={() => onLocationClicked(locationName)}
              >
                {locationName}
              </Typography.Text>
            </List.Item>
          )}
        />
      </Panel>
    </Collapse>
  );
};

export default TrainingLocationList;
