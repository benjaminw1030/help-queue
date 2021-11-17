import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.ticketList.map((ticket) =>
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            id={ticket.id}
            key={ticket.id}
            onRemovingTicket={props.onRemovingTicket}
            onEditClick={props.onEditClick}
            />
          )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onEditClick: PropTypes.func,
  onRemovingTicket: PropTypes.func
};

export default TicketList;