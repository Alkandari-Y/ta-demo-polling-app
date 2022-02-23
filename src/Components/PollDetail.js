import React from "react";

const PollDetail = ({ selectedPoll, pollsArray }) => {
  const pollDetail = pollsArray.find((poll) => poll.id === selectedPoll);

  const handleNoVote = () => {
    pollDetail.noVotes++;
    console.log(pollsArray);
  };
  const handleYesVote = () => {
    pollDetail.yesVotes++;
    console.log(pollsArray);
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
              <h1
                onClick={() => {
                  selectedPoll = null;
                  console.log(selectedPoll);
                }}
              >
                x
              </h1>
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
