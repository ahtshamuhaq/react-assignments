import React from "react";
import { useState } from "react";

export default function FORMATTER() {
  const [value, setValue] = useState([]);
  const getNumberString = (str) =>{
    console.log(typeof str);
      
    // [...str]
    //   .filter((input) => {
    //     Number.isInteger(+input) && input !== "";
    //   })
    //   .join("");
    return null;
  }
      
     

  const formatString = (str) => {
    const numStr = getNumberString(str);
    return numStr.length > 3
      ? "+(" + numStr.substring(0, 3) + ") - " + numStr.substring(3)
      : numStr;
  };
  const onChangeHandle = (event) => {
    const formateNumber = event.target.value;
    console.log(formateNumber);
    setValue(formatString(formateNumber));
  };
  return (
    <div className="d-flex flex-column justify-content-center">
      <hr />
      <h1 className="text-center">Telephone Formatter</h1>
      <hr />
      <div className="d-flex justify-content-center">
        <input
          type="tel"
          maxLength={16}
          id="input"
          style={{ width: "250px" }}
          onChange={onChangeHandle}
        
          placeholder={"Mobile Number"}
          
        />
      </div>
      <div className="d-flex justify-content-center my-2">
        <label>+(123) - 4567890</label>
      </div>
      <div style={{ height: "250px" }}></div>
    </div>
  );
  }
