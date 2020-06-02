import { Style, Fill, Stroke } from "ol/style";
import { Icon } from "ol/style";
import manGymIcon from "../img/gym/man-gym.png";
import manGymSelectedIcon from "../img/gym/man-gym-selected.png";
import womanGymIcon from "../img/gym/woman-gym.png";
import womanGymSelectedIcon from "../img/gym/woman-gym-selected.png";

const ICON_SCALE = 0.25;
const styles = {


  manIconStyle: new Style({
    image: new Icon({
      src: manGymIcon,
      scale: ICON_SCALE,
    }),
  }),

  womanIconStyle: new Style({
    image: new Icon({
      src: womanGymIcon,
      scale: ICON_SCALE,
    }),
  }),

  manSelectedIconStyle: new Style({
    image: new Icon({
      src: manGymSelectedIcon,
      scale: ICON_SCALE,
    }),
  }),

  womanSelectedIconStyle: new Style({
    image: new Icon({
      src: womanGymSelectedIcon,
      scale: ICON_SCALE,
    }),
  }),

  kommunStyle: new Style({
    stroke: new Stroke({
      color: "grey",
      width: 3,
    }),
    fill: new Fill({
      color: "rgba(232, 232, 232, 0.5)",
    }),
  }),

  trackStyles: [
    new Style({
      stroke: new Stroke({
        color: "black",
        lineDash: [1, 2.5],
        width: 4,
        lineDashOffset: 0,
      }),
    }),
    new Style({
      stroke: new Stroke({
        color: "rgb(204,144,122)",
        lineDash: [1, 2.5],
        width: 2.5,
        lineDashOffset: 0,
      }),
    }),
  ],

  trackStylesHover: [
    new Style({
      stroke: new Stroke({
        color: "blue",
        lineDash: [1, 2.5],
        width: 6,
        lineDashOffset: 0,
      }),
    }),
    new Style({
      stroke: new Stroke({
        color: "rgb(204,144,122)",
        lineDash: [1, 2.5],
        width: 2.5,
        lineDashOffset: 0,
      }),
    }),
  ],

  hoverStyleFunction: (feature) => {
    if (feature.getProperties()["type"] === "track") {
      return styles.trackStylesHover;
    }
    if (feature.getProperties()["type"] === "gym") {
      return feature.getProperties()["hoverStyle"];
    }
    return undefined;
  },
};

export default styles;
