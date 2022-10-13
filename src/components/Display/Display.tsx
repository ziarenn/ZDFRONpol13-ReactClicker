import React from "react";

// {
//   jakisProps: 5,
//   x: "5",
//   jakisProps2: "test"
// }

// const Display = (props: {
//   jakisProps: number;
//   x: string;
//   jakisProps2: string;
// }) => {



const Display = (props) => {
  const generateRandomNumber = () => {
    return Math.random();
  };

  console.log(props.jakisProps);
  console.log(props.x);
  console.log(props.jakisProps2);
  return (
    <>
      <p>{generateRandomNumber()}</p>
      <p>0</p>
    </>
  );
};

export default Display;
