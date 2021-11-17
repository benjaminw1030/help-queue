import React from "react";
import PropTypes from "prop-types";

function EditTicketForm(props) {
  const [issueInput, setIssueInput] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);

  function handleEditTicketFormSubmission(event) {
    // event.preventDefault();
    props.onEditingTicket({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: props.ticket.id,
    });
  }

  function handleIssueChange(event) {
    if(event.target.value === event.target.value.toLowerCase()) {
      setIssueInput(event.target.value)
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={handleEditTicketFormSubmission}>
        <input type="text" name="names" placeholder={props.ticket.names}  />
        <input type="text" name="location" placeholder={props.ticket.location}/>
        <label htmlFor="issue">Describe your issue: </label>
        <textarea name="issue" value={issueInput} onChange={handleIssueChange} placeholder={props.ticket.issue} />
        {isValid ? null : <div style={{color: 'red'}}>Sorry, you may only enter capital letters.</div>}
        <button type="submit">Update Request!</button>

      </form>
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  onEditTicketCreation: PropTypes.func,
  ticket: PropTypes.object
};

export default EditTicketForm;