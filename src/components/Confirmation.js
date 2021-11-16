import React from "react";
import PropTypes from "prop-types";

function Confirmation(props){
  let message = '';
  if (props.step === 2) {
    message = "Have you gone through all the steps on the Learn How to Program debugging lesson?";
  } else if (props.step === 3) {
     message = "Have you asked another pair for help?";
  } else if (props.step === 4) {
    message = "Have you spent 15 minutes going through through the problem documenting every step?";
  }
  return(
    <>
      <h1>{message}</h1>
      <button onClick={props.handleClick}>Yes</button>
      <button onClick={props.resetClick}>No</button>
    </>
  );
}

Confirmation.propTypes = {
  step: PropTypes.number,
  handleClick: PropTypes.func,
  resetClick: PropTypes.func
}

export default Confirmation;