import React, { useEffect, useState } from "react";
import { getWordInfo } from "../data/api";

function HomeScreen() {
  const [word, setWord] = useState({
    data: [],
    searchTerm: "",
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
    const response = await getWordInfo(word.searchTerm);
    return setWord({
      data: response,
      searchTerm: "",
    });
  };
  const { data } = word;

  console.log(data)
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={word.searchTerm}
        onChange={(e) => setWord({ ...word, searchTerm: e.target.value })}
        autoFocus
      />
      <h1>{data.word}</h1>
    </form>
  );
}
export default HomeScreen;
