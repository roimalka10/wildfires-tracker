import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const color = "white";

const Loader = () => {
  return (
    <div className="loader">
      <Icon icon={locationIcon} className="icon" />
      <h1>Getting Data</h1>
    </div>
  );
};

export default Loader;
