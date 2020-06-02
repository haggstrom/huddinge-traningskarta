import React from "react";
import { Card } from "antd";
import styles from "../css/SimplePopup.module.css";

const SimplePopup = ({ popupId, title, text }) => {
  return (
    <div className={styles.popupContainer}>
      <div id={popupId}>
        <Card className={styles.popupCard} size="small" title={title}>
          <p>{text}</p>
        </Card>
      </div>
    </div>
  );
};

export default SimplePopup;
