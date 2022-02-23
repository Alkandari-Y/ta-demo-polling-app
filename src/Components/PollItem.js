import React from "react";

const PollItem = ({ poll, selectedPoll }) => {
  return (
    <div className="Poll-Item">
      <h4
        onClick={() => {
          selectedPoll = poll.id;
        }}
      >
        {poll.title}
      </h4>
    </div>
  );
};

export default PollItem;
