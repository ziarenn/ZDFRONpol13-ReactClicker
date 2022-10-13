import React from "react";
import { DisplayProps } from "../../helpers/interfaces";
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

// FC = functional component


const Display: React.FC<DisplayProps> = ({ jakisProps, x, jakisProps2 }) => {

  const generateRandomNumber = () => {
    return Math.random();
  };

  console.log(jakisProps);
  console.log(x);
  console.log(jakisProps2);
  return (
    <>
      <p>{generateRandomNumber()}</p>
      <p>0</p>
    </>
  );
};

export default Display;
