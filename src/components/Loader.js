import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

const color = "white";

const Loader = () => {
  return (
    <div className="loader">
      <FadeLoader
        className={css`
          border-color: ${color};
        `}
      />
      <h1>Getting Data</h1>
    </div>
  );
};

export default Loader;
