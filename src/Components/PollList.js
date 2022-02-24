import React from "react";
import PollItem from "./PollItem";
import Search from "./Search";
import PollForm from "./PollForm";

const PollList = ({ pollsArray, selectedPoll }) => {
  let open = false;
  let query = "";

  const pollList = pollsArray
    .filter((poll) => poll.title.toLowerCase().includes(query.toLowerCase()))
    .map((poll) => (
      <PollItem poll={poll} selectedPoll={selectedPoll} key={poll.id} />
    ));

  const onOpenForm = () => {
    open = !open;
    console.log(open);
  };

  const addToPOllArray = (newPoll) => {
    pollsArray.push(newPoll);
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
          <Search query={query} />
          <div className="PollList-Side-Bar">{pollList}</div>
        </>
      ) : (
        <PollForm onOpenForm={onOpenForm} addToPOllArray={addToPOllArray} />
      )}
    </div>
  );
};

export default PollList;
