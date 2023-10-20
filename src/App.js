import { useState } from "react";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Reset from "./components/Reset";

function App() {
  const [value, setValue] = useState(0);
  const [isIncreased, setIsIncreased] = useState(false);

  return (
    <div className="bg-[#ecfdf1] h-[100vh] flex justify-center items-center">
      <div className="flex flex-col space-y-10">
        <p className="text-[40px] font-serif text-center lg:text-[40px]">
          Counter App
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-8">
        <p
          className="text-[#000] text-[50px] font-medium"
          style={{
            color: isIncreased
              ? "green"
              : isIncreased === false
              ? "red"
              : "black",
          }}
        >
          {value}
        </p>
        <div className="flex flex-row gap-3 py-10 lg:gap-10">
          <Increment i={value} i1={setValue} increase={setIsIncreased} />
          <Reset r1={setValue} increase={setIsIncreased} />
          <Decrement i={value} i1={setValue} increase={setIsIncreased} />
        </div>
      </div>
    </div>
  );
}

export default App;
