export const isReviewShown = true;

export const itemsIdProductsMock = [
  "6258661f0bf68a57c06813f5",
  "6258661f0bf68a57c06814b4",
  "6258661f0bf68a57c0681481",
  "6258661f0bf68a57c0681438",
];

export const randomNumberIdsMock = (arrayLength: number) => {
  const randArray = [];
  const itemsAmount = 1965;
  do {
    const rand = Math.floor(Math.random() * itemsAmount);
    if (!randArray.includes(rand)) { randArray.push(rand); }
  } while (randArray.length < arrayLength);
  return randArray;
};

export const itemsIdLibraryMock = [1, 2, 3, 4];
