import React, { useState } from "react";

var prompt =
  "Psst! Spies! They're listening to us... I sent you an encoded hint to our next meeting place";
var answers = ["marist", "marist college", "marist university"];

function Letter(props) {
  const [puzzle, setPuzzle] = useState(
    "20 8 5; 3 1 13 16 21 19; 15 6; 18 5 4; 6 15 24 5 19;"
  );

  const [solved, setSolved] = useState(false);
  const [location, setLocation] = useState("");
  const handleNext = evt => {
    evt.preventDefault();
    props.handleDone();
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("submitted");
    if (answers.includes(location.toLowerCase())) {
      console.log("true!");
      setSolved(true);
      setPuzzle("The campus of Red Foxes");
    }
  };
  return (
    <div>
      <p>{prompt}</p>
      <p>{puzzle}</p>
      <form hidden={solved} onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form hidden={!solved} onSubmit={handleNext}>
        Meet me at the location for your next clue!
        <input value="Next" type="submit" />
      </form>
    </div>
  );
}
export default Letter;
