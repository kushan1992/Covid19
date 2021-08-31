import React from "react";
import { useSelector } from "react-redux";

function Footer() {
  const statics = useSelector((state) => state.statics);

  return (
    <div className="footer">
      <p>Last updated at: {statics && statics.update_date_time}</p>
    </div>
  );
}

export default Footer;
