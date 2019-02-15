const data = {
  0: {
    children: [1, 6],
  },
  1: {
    name: 'Pizza',
    isLeaf: false,
    children: [2, 4],
  },
  2: {
    name: 'Rome pizza',
    isLeaf: false,
    children: [3],
  },
  3: {
    name: 'Naples',
    isLeaf: true,
    fillers: 'cheese, tomato',
    price: 250,
  },
  4: {
    name: 'Ordinary pizza',
    isLeaf: false,
    children: [5],
  },
  5: {
    name: 'Margarita',
    isLeaf: true,
    fillers: 'cheese, tomato',
    price: 300,
  },
  6: {
    name: 'Rolls',
    isLeaf: false,
    children: [7, 8],
  },
  7: {
    name: 'Kabayaki',
    isLeaf: true,
    fillers: 'fish, rice',
    price: 250,
  },
  8: {
    name: 'Ninzya',
    isLeaf: true,
    fillers: 'fish, rice',
    price: 250,
  },
};

module.exports = data;
