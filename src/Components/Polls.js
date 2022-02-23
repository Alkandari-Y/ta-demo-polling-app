import React from "react";
import PollData from "../PollData";
import PollList from "./PollList";
import PollDetail from "./PollDetail";

const Polls = () => {
  const pollsArray = PollData;
  let selectedPoll = 1;

  return (
    <div className="Main-Layout">
      <PollList pollsArray={pollsArray} selectedPoll={selectedPoll} />
      <PollDetail selectedPoll={selectedPoll} pollsArray={pollsArray} />
    </div>
  );
};

export default Polls;
