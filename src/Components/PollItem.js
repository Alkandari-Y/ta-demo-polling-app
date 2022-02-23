import React from "react";

const PollItem = ({ poll, setSelectedPoll }) => {
  return (
    <div className="Poll-Item">
      <h4 onClick={() => setSelectedPoll(poll.id)}>{poll.title}</h4>
    </div>
  );
};

export default PollItem;
