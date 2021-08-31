import React from "react";
import { API } from "../../backend";




const ImageHelper = ({ project }) => {
  const imageurl = project
    ? `${API}/project/photo/${project._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
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