import React from "react";

const PollForm = ({ onOpenForm, addToPOllArray }) => {
  let title = "";
  let question = "";

  const handleSubmit = (e) => {
    const randomId = Date.now();
    addToPOllArray({
      title,
      question,
      id: randomId,
      noVotes: 0,
      yesVotes: 0,
    });
    onOpenForm();
  };

  return (
    <div>
      <div className="Side-Bar-Heading">
        <h3>New Poll</h3>
        <h3 className="New-Poll-Toggle" onClick={onOpenForm}>
          x
        </h3>
      </div>
      <form className="New-Poll-Form" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <br />
          <input
            name="title"
            type="text"
            placeholder="Enter Title"
            onChange={(e) => {
              title = e.target.value;
            }}
          />
          <label>Question</label>
          <br />
          <input
            name="question"
            type="text"
            placeholder="Enter Question"
            onChange={(e) => {
              question = e.target.value;
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PollForm;
