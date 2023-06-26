import React from "react";
import { connect } from "react-redux";
import { rnd } from "../App";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="app">
      <h2>{counter}</h2>
      <button onClick={inc} className="btn btn-primary btn-lg">
        INC
      </button>
      <button onClick={dec} className="btn btn-primary btn-lg">
        DEC
      </button>
      <button onClick={rnd} className="btn btn-primary btn-lg">
        RND
      </button>
    </div>
  );
};
const mapStateProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({ type: "INC" }),
    dec: () => dispatch({ type: "DEC" }),
    rnd: () => {
      const RandomValue = Math.floor(Math.random() * 10);
      dispatch(rnd(RandomValue));
    },
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Counter);
