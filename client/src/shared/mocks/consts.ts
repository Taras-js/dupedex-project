export const isReviewShown = true;

export const itemsIdProductsMock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export const randomItemsIdProductsMock = (arrayLength: number) => {
  const randArray = [];
  do {
    const rand = Math.floor(Math.random() * itemsIdProductsMock.length);
    if (!randArray.includes(itemsIdProductsMock[rand])) randArray.push(itemsIdProductsMock[rand]);
  } while (randArray.length < arrayLength);
  return randArray;
};

export const itemsIdLibraryMock = [1, 2, 3, 4];
