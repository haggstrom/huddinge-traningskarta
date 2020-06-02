import React from "react";
import { Card } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import styles from "../css/AuthorPanel.module.css";
import IconLink from "./IconLink";

const AuthorPanel = () => {
  return (
    <Card className={styles.authorCard} size="small">
      <div className={styles.textContainer}>
        <h4>Kartan är skapad av</h4>
        Anders Häggström
      </div>

      <div className={styles.iconContainer}>
        <IconLink
          link={"https://www.linkedin.com/in/anders-haggstrom/"}
          linkTitle={"Anders Häggström på LinkedIn"}
          icon={<LinkedinOutlined className={styles.icon} />}
        />

        <IconLink
          link={"https://github.com/haggstrom/"}
          linkTitle={"Anders Häggström på GitHub"}
          icon={<GithubOutlined className={styles.icon} />}
        />
      </div>
    </Card>
  );
};

export default AuthorPanel;
