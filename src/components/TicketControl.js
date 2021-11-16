import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import Confirmation from "./Confirmation";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  handleClick = () => {
    if (this.state.step < 5) {
      this.setState((prevState) => ({
        step: prevState.step + 1,
      }));
    } else {
      this.setState({
        step: 1,
      });
    }
  };

  resetClick = () => {
    this.setState({
      step: 1,
    });
  };

  render() {
    let currentDisplay = null;
    if (this.state.step === 1) {
      currentDisplay = (
        <>
          <TicketList />
          <button onClick={this.handleClick}>Add a Ticket</button>{" "}
        </>
      );
    } else if (this.state.step > 1 && this.state.step < 5) {
      currentDisplay = (
        <Confirmation
          step={this.state.step}
          handleClick={this.handleClick}
          resetClick={this.resetClick}
        />
      );
    } else {
      currentDisplay = (
        <>
          <NewTicketForm />
          <button onClick={this.handleClick}>Return to Ticket List</button>
        </>
      );
    }
    return currentDisplay;
  }
}

export default TicketControl;
