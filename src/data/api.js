import axios from "axios";

export const getWordInfo = async (word = "word") => {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const fetchWordInfo = await axios.get(url);
    const wordInfo = await fetchWordInfo.json();
    return wordInfo[0];
  } catch (e) {
    console.log(e);
  }
};
