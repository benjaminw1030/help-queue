import React from "react";
import NewTicketForm from "./NewTicketForm";
import EditTicketForm from "./EditTicketForm";
import TicketList from "./TicketList";
import Confirmation from "./Confirmation";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      mainTicketList: [],
      selectedTicketId: null,
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

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({ mainTicketList: newMainTicketList, step: 1 });
  };

  handleEditClick = (id) => {
    this.setState({
      selectedTicketId: id,
      step: 6
    })
  }
  
  handleEditingTicket = (ticket) => {
    //replacement method
    const newMainTicketList = [...this.state.mainTicketList];
    const index = newMainTicketList.findIndex(t => t.id === ticket.id);
    console.log(index)
    newMainTicketList[index] = ticket;

    console.log(newMainTicketList)
    /*
    // // 1. Make a shallow copy of the items
    // let items = [...this.state.items];
    // // 2. Make a shallow copy of the item you want to mutate
    // let item = {...items[1]};
    // // 3. Replace the property you're intested in
    // item.name = 'newName';
    // // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    // items[1] = item;
    // // 5. Set the state to our new copy
    // this.setState({items});
    */

    //delete and add again method
    // const newMainTicketList = this.state.mainTicketList.filter(
    //   (t) => t.id !== ticket.id
    // ).concat(ticket);
    
    this.setState({ mainTicketList: newMainTicketList, step: 1 });
  }

  handleRemovingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(
      (t) => t.id !== id
    );
    this.setState({ mainTicketList: newMainTicketList });
  };

  // handleEditTicket = (id)

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
          <TicketList
            ticketList={this.state.mainTicketList}
            onRemovingTicket={this.handleRemovingTicket}
            onEditClick={this.handleEditClick}
          />
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
    } else if (this.state.step === 5) {
      currentDisplay = (
        <>
          <NewTicketForm
            onNewTicketCreation={this.handleAddingNewTicketToList}
          />
          <button onClick={this.handleClick}>Return to Ticket List</button>
        </>
      );
    } else {
      currentDisplay = (
      <>
        <EditTicketForm onEditingTicket={this.handleEditingTicket} ticket={this.state.mainTicketList.find(t => t.id === this.state.selectedTicketId)} />
        <button onClick={this.handleClick}>Return to Ticket List</button>
      </>
      );
    }

    return currentDisplay;
  }
}

export default TicketControl;
