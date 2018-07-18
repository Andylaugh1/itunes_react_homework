import React from "react";

const SongDetail = (props) => {
  if (!props.character) return null;
  return(
    <div>
      <h3>
        {props.song.feed.entry["im:name"].label}
      </h3>
      {/* <p>
        Name: {props.character.name}
      </p>
      <p>Species: {props.character.species}</p> */}
    </div>
  );
}

export default SongDetail;
