const data = {
  0: {
    children: [1, 6],
  },
  1: {
    name: 'Пицца',
    isLeaf: false,
    children: [2, 4],
  },
  2: {
    name: 'Римская пицца',
    isLeaf: false,
    children: [3],
  },
  3: {
    name: 'Неаполь',
    isLeaf: true,
    fillers: 'сыр, помидоры',
    price: 250,
  },
  4: {
    name: 'Обычная пицца',
    isLeaf: false,
    children: [5],
  },
  5: {
    name: 'Маргарита',
    isLeaf: true,
    fillers: 'сыр, помидоры',
    price: 300,
  },
  6: {
    name: 'Роллы',
    isLeaf: false,
    children: [7, 8],
  },
  7: {
    name: 'Кабаяки',
    isLeaf: true,
    fillers: 'рыба, рис',
    price: 250,
  },
  8: {
    name: 'Нинзя',
    isLeaf: true,
    fillers: 'рыба, рис',
    price: 250,
  },
};

module.exports = data;
