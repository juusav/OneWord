import React from "react";

function PlayMp3(props) {
  const playAudio = () => {
    const getAudio = new Audio(props.audio);
    return getAudio.play();
  };

  return (
    <div>
      <button onClick={playAudio()}>playMp3</button>
    </div>
  );
}

export default PlayMp3;
