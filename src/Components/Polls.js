import React, { useState } from "react";
import PollData from "../PollData";
import PollList from "./PollList";
import PollDetail from "./PollDetail";

const Polls = () => {
  const [pollsArray, setPollsArray] = useState(PollData);
  const [query, setQuery] = useState("");
  const [selectedPoll, setSelectedPoll] = useState(null);

  return (
    <div className="Main-Layout">
      <PollList pollsArray={pollsArray} setSelectedPoll={setSelectedPoll} />
      <PollDetail
        selectedPoll={selectedPoll}
        setSelectedPoll={setSelectedPoll}
      />
    </div>
  );
};

export default Polls;
