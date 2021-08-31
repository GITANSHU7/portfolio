import React from "react";
import { API } from "../../backend";




const ImageHelper = ({ project }) => {
  const imageurl = project
    ? `${API}/project/photo/${project._id}`
    : "";
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
       
      />
    </div>
  );
};

export default ImageHelper;