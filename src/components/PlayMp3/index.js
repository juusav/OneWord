import React from "react";

function PlayMp3(props) {
  function play(audio) {
    let audioID = document.getElementById("audioID");

    if (!audioID || audioID !== audio) audioID = audio;

    if (audioID === true) {
      console.log("pause");
      audioID.pause();
    } else {
      console.log("play");
      audioID.play();
    }
  }
  return (
    <div>
      <p onClick={play(props.audio)}>playMp3</p>
      <audio id="audioID"></audio>
    </div>
  );
}

export default PlayMp3;
