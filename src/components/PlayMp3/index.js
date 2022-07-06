import React from "react";
import { HiSpeakerphone } from "react-icons/hi";
import "./styles.css";

function PlayMp3(props) {
  const playAudio = () => {
    const getAudio = new Audio(props.audio);
    return getAudio.play();
  };

  return (
    <div>
      <button onClick={playAudio} className="button">
        <HiSpeakerphone color="white" className="icon" />
        <p className="pronounce primary_color">
          Pronounce <span className="word primary_color">{props.word}</span>
        </p>
      </button>
    </div>
  );
}

export default PlayMp3;
