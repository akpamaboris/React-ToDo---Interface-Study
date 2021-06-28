import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counterBody">
      {/* ROUND COUNT WITH THE NUMBERS  */}
      <div className="placeRoundCount">
        <div className="roundCount" style={{ textAlign: "center" }}>
          <div className="fontRoundCount">{count}</div>
        </div>
      </div>
      {/* ROUND COUNT WITH THE NUMBERS  */}
      {/* INCREMENT AND DECREMENT */}
      <div className="placeIncrementDecrementCount">
        <div className="incrementDecrementCount">
          <div
            className="buttonCounter"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <span
              style={{
                fontSize: "150px",
                position: "relative",
                bottom: "30px",
                left: "15px",
                cursor: "pointer",
              }}
            >
              +
            </span>
          </div>
          <div
            className="buttonCounter"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            <span
              style={{
                fontSize: "150px",
                position: "relative",
                bottom: "30px",
                left: "35px",
                cursor: "pointer",
              }}
            >
              -
            </span>
          </div>
        </div>
      </div>
      {/* INCREMENT AND DECREMENT */}
    </div>
  );
};

export default Counter;
