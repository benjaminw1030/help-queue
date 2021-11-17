import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  const handleRemoveClick = (event) => {  
    props.onRemovingTicket(event.target.value)
  }
  const handleEditClick = (event) => {  
    props.onEditClick(event.target.value)
  }
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <button className="btn btn-dark" value={props.id} onClick={handleRemoveClick}>Delete Ticket</button>
      <button className="btn btn-dark" value={props.id} onClick={handleEditClick}>Edit Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  id: PropTypes.string.isRequired,
  onRemovingTicket: PropTypes.func,
  onEditingTicket: PropTypes.func
};

export default Ticket;