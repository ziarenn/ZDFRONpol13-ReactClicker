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

const Display: React.FC<DisplayProps> = ({ propToPassDown }) => {
  const generateRandomNumber = () => {
    return Math.random();
  };

  console.log(propToPassDown);
  return (
    <>
      <p>{generateRandomNumber()}</p>
      <p>{propToPassDown}</p>
    </>
  );
};

export default Display;
