import React from "react";

const CustomFileUpload = ({label, handleChange, ...restProps }) => {
  return (
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="customFile2" onChange={({target}) => handleChange(target.value)} {...restProps}/>
    <label className="custom-file-label" htmlFor="customFile2">
      {label}
    </label>
  </div>
)};

export default CustomFileUpload;
