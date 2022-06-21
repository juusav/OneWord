import React, { useEffect, useState } from "react";
// import PlayMp3 from "../components/PlayMp3";
import { getWordInfo } from "../data/api";
import "./styles.css";

function HomeScreen() {
  const [searchWord, setWord] = useState({
    data: {
      word: "words",
      phonetics: [{ 0: { audio: "-hola--.mp3" } }, { 1: { audio: "---.mp3" } }],
    },
    term: "",
    error: "",
  });

  if (searchWord.data.phonetics !== undefined) {
    console.log(searchWord.data.phonetics[0][0].audio);
  }

  const fetchData = async () => {
    const fetchedData = await getWordInfo("word");
    if (fetchedData) {
      setWord({
        data: fetchData,
      });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getWordInfo(searchWord.term);
    if (searchWord.term === "") {
      return setWord({ ...searchWord, error: "Please write a valid text" });
    }

    return setWord({
      data: response,
      term: "",
      error: "",
    });
  };

  const { data } = searchWord;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>OneWord</h1>
        <input
          type="text"
          placeholder="Search"
          className="inputText"
          value={searchWord.term}
          onChange={(e) => setWord({ ...searchWord, term: e.target.value })}
          autoFocus
        />
      </form>
      <p>{searchWord.error ? searchWord.error : ""}</p>
      {searchWord ? (
        <>
          <h2>{data.word ? data.word : ""}</h2>
          {/* <PlayMp3 audio={data.phonetics} /> */}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
export default HomeScreen;
