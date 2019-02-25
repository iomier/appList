import React from "react";
import Input from "./utils/input";

const fields = ({ submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <Input name="City" />
      <button type="submit" className="btn btn-primary btn-block">
        Get Weather
      </button>
    </form>
  );
};
export default fields;
