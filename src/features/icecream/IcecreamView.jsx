import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, reOrdered } from "./icecreamSlice";

export const IcecreamView = () => {
  const numOfIce = useSelector((state) => state.icecream.numberOfIcecream);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(1);

  return (
    <>
      <h2>Number of Ice Cream - {numOfIce}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(reOrdered(value))}>
        Reorder Ice Cream
      </button>
    </>
  );
};
