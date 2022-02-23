import React from "react";

const PollDetail = ({ selectedPoll, setSelectedPoll }) => {
  console.log(selectedPoll);
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
              <h1>{selectedPoll.title}</h1>
            </div>
            <div className="Poll-Detail-Close">
              <h1 onClick={() => setSelectedPoll(null)}>x</h1>
            </div>
          </header>

          <section className="Poll-Section">
            <div className="Poll-Question">
              <h2>{selectedPoll.question}</h2>
            </div>

            <div className="Poll-Vote-Count">
              <div className="Poll-Votes">
                <h3>No Votes: {selectedPoll.noVotes}</h3>
              </div>
              <div className="Poll-Votes">
                <h3>Yes Votes: {selectedPoll.yesVotes} </h3>
              </div>
            </div>

            <h4>Cast Your Vote</h4>
            <div className="Poll-Voting">
              <button>No</button>
              <button>Yes</button>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default PollDetail;
