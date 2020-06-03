import React from "react";
import { Card } from "antd";
import styles from "../css/SimplePopup.module.css";
import { CloseOutlined } from "@ant-design/icons";

const SimplePopup = ({ popupId, title, text, onClose }) => {
  return (
    <div className={styles.popupContainer}>
      <div id={popupId}>
        <Card
          className={styles.popupCard}
          size="small"
          title={title}
          extra={<CloseOutlined onClick={onClose} />}
        >
          <p>{text}</p>
        </Card>
      </div>
    </div>
  );
};

export default SimplePopup;
