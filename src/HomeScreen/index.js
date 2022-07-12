import React, { useEffect, useState } from "react";
import PlayMp3 from "../components/PlayMp3";
import { getWordInfo } from "../data/api";
import "./styles.css";

function HomeScreen() {
  const [searchWord, setWord] = useState({
    data: "",
    term: "",
    error: "",
  });
  const fetchData = async () => {
    const fetchedData = await getWordInfo();
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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="underline decoration-pink-500 text-7xl font-bold myH1">
          OneWord
        </h1>
        <input
          type="text"
          placeholder="Search"
          className="inputText"
          value={searchWord.term || ""}
          onChange={(e) => setWord({ ...searchWord, term: e.target.value })}
          autoFocus
        />
      </form>

      <p className="underline decoration-red-500/30">
        {searchWord.error ? searchWord.error : ""}
      </p>
      {data ? (
        <>
          <h2 className="myWord">{data.word ? data.word : ""}</h2>
        </>
      ) : (
        ""
      )}

      <div>
        {searchWord.data.meanings ? (
          <>
            <span>{searchWord.data?.meanings[0].partOfSpeech}</span>
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        {searchWord.data.phonetics ? (
          <PlayMp3
            audio={searchWord.data?.phonetics[0].audio}
            word={data.word}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
