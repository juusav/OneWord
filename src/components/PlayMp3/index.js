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
        <HiSpeakerphone color="white" />
        <p className="pronounce">
          Pronounce <span className="word">{props.word}</span>
        </p>
      </button>
    </div>
  );
}

export default PlayMp3;
