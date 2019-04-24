import words from "./words";
import { wordsMap, isValidWord, isValidText } from "./validator";

test("wordsMap has 850 items", () => {
  expect(wordsMap.size).toEqual(850);
});

test("isValidWord returns true for all basic english words", () => {
  words.forEach(w => expect(isValidWord(w)).toEqual(true));
});

test("isValidWord returns false for non basic english words", () => {
  expect(isValidWord("supercilious")).toBe(false);
  expect(isValidWord("auxiliairy")).toBe(false);
});

describe("testing isValidText", () => {
  test("validates simple valid text", () => {
    expect(isValidText("This be almost a note")).toBe(true);
  });

  test("validates valid text with basic punctuation", () => {
    expect(isValidText("This be almost a note.")).toBe(true);
    expect(isValidText("This be a note, almost.")).toBe(true);
    expect(isValidText("I see you; you see I.")).toBe(true);
    expect(isValidText("I see why: you slow.")).toBe(true);
    expect(isValidText("You happy?"));
  });

  test("detects invalid text", () => {
    expect(isValidText("It is so hard to keep things simple.")).toBe(false);
  });
});
