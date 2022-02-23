import React, { useState } from "react";
import PollItem from "./PollItem";
import Search from "./Search";
import PollForm from "./PollForm";

const PollList = ({ pollsArray, setSelectedPoll }) => {
  const [open, setOpen] = useState(false);

  const pollList = pollsArray.map((poll) => (
    <PollItem poll={poll} setSelectedPoll={setSelectedPoll} key={poll.id} />
  ));

  const onOpenForm = () => {
    setOpen(!open);
    console.log(open);
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
          <Search />
          <div className="PollList-Side-Bar">{pollList}</div>
        </>
      ) : (
        <PollForm />
      )}
    </div>
  );
};

export default PollList;
