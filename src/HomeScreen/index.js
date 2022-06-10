import React, { useEffect, useState } from "react";
import { getWordInfo } from "../data/api";

function HomeScreen() {
  const [word, setWord] = useState([]);

  const fetchData = async () => {
    const fetchedData = await getWordInfo();
    setWord(fetchedData);
  };

  useEffect(() => {
    fetchData()
  }, [])
  
  console.log(word)

  return <div>- {word.word}</div>;
}

export default HomeScreen;
