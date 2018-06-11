import React from "react";
import EmployeeData from "./EmployeeData";

export default ({ data, update }) => {
  if (!data) {
    return <tbody><tr><td>Loading...</td></tr></tbody>;
  }

  const employees = data.map((data, index) => {
    return (
      <EmployeeData data={data} index={index} update={update} key={data.id} />
    );
  });

  return <tbody>{employees}</tbody>;
};
