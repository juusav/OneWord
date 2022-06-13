import React, { useEffect, useState } from "react";
import { getWordInfo } from "../data/api";

function HomeScreen() {
  const [searchWord, setWord] = useState({
    data: [],
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchWord.term}
        onChange={(e) => setWord({ ...searchWord, term: e.target.value })}
        autoFocus
      />
      <p>{searchWord.error ? searchWord.error : ""}</p>
      <h1>{data.word ? data.word : ""}</h1>
    </form>
  );
}
export default HomeScreen;
