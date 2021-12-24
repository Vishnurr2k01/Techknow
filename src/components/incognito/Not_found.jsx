import React from "react";
import "../stylesheet/Not_found.css";
import error from "../images/error.svg";
function Not_found() {
  return (
    <div>
      <img src={error} alt="new" />
      <div className="err-msg">
        <h1>404: Page Not Found!!</h1>
      </div>
    </div>
  );
}

export default Not_found;
