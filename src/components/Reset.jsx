import React from "react";

const Reset = ({ r1, increase }) => {
  const handleReset = () => {
    r1(0);
    increase(null);
  };
  return (
    <div className="border-2 border-[#000] text-[18px] bg-transparent px-3 py-2 cursor-pointer rounded-md hover:bg-[#000] hover:text-[#FAEBD7]">
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Reset;
