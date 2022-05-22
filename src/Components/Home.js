import React from "react";
import { IncNumber, DecNumber } from "../Service/Action/Action";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const viewCounter = useSelector((state) => {
    return state.counterStore;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1> Count : {viewCounter.count} </h1>
        <button
          style={{ marginRight: 5 }}
          className="btn btn-primary"
          onClick={() => dispatch(IncNumber())}
        >
          Increase (+)
        </button>

        <button
          className="btn btn-danger"
          onClick={() => dispatch(DecNumber())}
        >
          Decrease (-)
        </button>
      </div>
    </>
  );
};

export default Home;
