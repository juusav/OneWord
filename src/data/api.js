export const getWordInfo = async () => {
  try {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
    const fetchWordInfo = await fetch(url);
    const wordInfo = await fetchWordInfo.json();
    return wordInfo[0];
  } catch (e) {
    console.log(e);
  }
};
