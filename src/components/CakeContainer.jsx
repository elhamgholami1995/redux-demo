import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CakeContainer() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  return (
    <div>
      <h2>Cake Number:{state.numOfCakes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "BUY_CAKE", payload: value })}>
        Buy Cake
      </button>
    </div>
  );
}

export default CakeContainer;
