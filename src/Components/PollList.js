import React, { useState } from "react";
import PollItem from "./PollItem";
import Search from "./Search";
import PollForm from "./PollForm";

const PollList = ({ pollsArray, setSelectedPoll, setPollsArray }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const pollList = pollsArray
    .filter((poll) => poll.title.toLowerCase().includes(query.toLowerCase()))
    .map((poll) => (
      <PollItem poll={poll} setSelectedPoll={setSelectedPoll} key={poll.id} />
    ));

  const onOpenForm = () => {
    setOpen(!open);
    console.log(open);
  };

  const addToPOllArray = (newPoll) => {
    setPollsArray((prev) => [newPoll, ...prev]);
  };

  return (
    <div className="Polls-Side-Bar">
      {!open ? (
        <>
          <div className="Side-Bar-Heading">
            <h3>Polls</h3>
            <h3 className="New-Poll-Toggle" onClick={onOpenForm}>
              +
            </h3>
          </div>
          <Search query={query} setQuery={setQuery} />
          <div className="PollList-Side-Bar">{pollList}</div>
        </>
      ) : (
        <PollForm onOpenForm={onOpenForm} addToPOllArray={addToPOllArray} />
      )}
    </div>
  );
};

export default PollList;
