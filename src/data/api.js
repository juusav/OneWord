

export const getWordInfo = async (word = "word") => {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const wordInfo = await fetch(url);
    const data = await wordInfo.json()
    return data[0];
  } catch (e) {
    console.log(e);
  }
};
