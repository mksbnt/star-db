import React from "react";
import "./spinner.css";

const Spinner = () => {
  const style = {
    width: "100%",
    height: "100%"
  };

  return (
    <div className="lds-css ng-scope">
      <div style={style} className="lds-double-ring">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
