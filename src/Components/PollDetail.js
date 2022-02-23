import React, { useState } from "react";

const PollDetail = ({
  selectedPoll,
  setSelectedPoll,
  setPollsArray,
  pollsArray,
}) => {
  const pollDetail = pollsArray.find((poll) => poll.id === selectedPoll);

  const handleNoVote = () => {
    const filteredArray = pollsArray.filter((poll) => poll.id !== selectedPoll);
    pollDetail.noVotes++;
    setPollsArray([pollDetail, ...filteredArray]);
  };
  const handleYesVote = () => {
    const filteredArray = pollsArray.filter((poll) => poll.id !== selectedPoll);
    pollDetail.yesVotes++;
    setPollsArray([pollDetail, ...filteredArray]);
  };
  return (
    <div className="Poll-Details">
      {!selectedPoll ? (
        <div className="Poll-Detail-CTA">
          <h2>Select A Poll</h2>
        </div>
      ) : (
        <>
          <header className="Poll-Header">
            <div className="Poll-Title">
              <h1>{pollDetail.title}</h1>
            </div>
            <div className="Poll-Detail-Close">
              <h1 onClick={() => setSelectedPoll(null)}>x</h1>
            </div>
          </header>
          <section className="Poll-Section">
            <div className="Poll-Question">
              <h2>{pollDetail.question}</h2>
            </div>
            <div className="Poll-Vote-Count">
              <div className="Poll-Votes">
                <h3>No Votes: {pollDetail.noVotes}</h3>
              </div>
              <div className="Poll-Votes">
                <h3>Yes Votes: {pollDetail.yesVotes} </h3>
              </div>
            </div>
            <h4>Cast Your Vote</h4>
            <div className="Poll-Voting">
              <button onClick={handleNoVote}>No</button>
              <button onClick={handleYesVote}>Yes</button>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default PollDetail;
