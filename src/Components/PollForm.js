import React from "react";

const PollForm = ({ onOpenForm }) => {
  let title = "";
  let question = "";

  const handleSubmit = (e) => {
    console.log("submitted");
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
              console.log(title);
            }}
          />
          <label>Question</label>
          <br />
          <input
            name="question"
            type="text"
            placeholder="Enter Question"
            onChange={(e) => {
              title = e.target.value;
              console.log(title);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PollForm;
