// Функция возвращающая случайное целое число из переданного диапазона включительно
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));

  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Функция - генератор для получения уникальных идентификаторов из указанного диапазона, и так, чтобы они не повторялись
function createRandomFromRangeGenerator (a, b) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(a, b);
    if (previousValues.length >= (b - a + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// Функция для проверки максимальной длины строки
const checkStringLength = (string, length) => {
  return string.length <= length;
};

// Функция поиска случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

export {getRandomPositiveInteger};
export {createRandomFromRangeGenerator};
export {getRandomArrayElement};
