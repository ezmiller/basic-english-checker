import words from "./words";

const log = x => {
  console.log(x);
  return x;
};

const tokenize = text =>
  [text]
    .map(text => text.split(/\s+/))
    .map(tokens =>
      tokens.map(t => t.toLowerCase().replace(/[.,!?;:"]/, ""))
    )[0];

const getWordMap = wordList =>
  wordList.reduce((acc, w) => acc.set(w, w), new Map());

export const wordsMap = getWordMap(words);

export const isValidWord = word => wordsMap.has(word);

export const isValidText = text =>
  [text]
    .map(text => tokenize(text))
    .map(tokens => Array.from(new Set(tokens).values()))
    .map(log)
    .map(uniqueTokens => uniqueTokens.every(isValidWord))[0];
