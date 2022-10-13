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

const Display: React.FC<DisplayProps> = ({ count }) => {
  const generateRandomNumber = () => {
    return Math.random();
  };

  return (
    <>
      <p>Random number: {generateRandomNumber()}</p>
      <p>{count}</p>
    </>
  );
};

export default Display;
