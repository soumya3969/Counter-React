import React from "react";

const Decrement = ({ d, d1, increase }) => {
  const handleDecrement = () => {
    d1(d - 1);
    increase(false);
  };
  return (
    <div className="border-2 border-[#000] text-[18px] bg-transparent px-3 py-2 cursor-pointer rounded-md hover:bg-[#000] hover:text-[#FAEBD7]">
      <button onClick={handleDecrement}>DECREMENT</button>
    </div>
  );
};

export default Decrement;
