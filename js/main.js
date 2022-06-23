// Функция возвращающая случайное целое число из переданного диапазона включительно
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));

  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Функция для проверки максимальной длины строки
const checkStringLength = (string, length) => {
  return string.length <= length;
};

// Функция поиска случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const PHOTOS_DESCRIPTIONS_COUNT = 25;

const COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Леонардо',
  'Клод',
  'Винсент',
  'Пабло',
  'Питер',
  'Пьер',
  'Рафаэль',
  'Рембрандт',
  'Сальвадор',
  'Сандро',
  'Поль',
  'Микеланджело',
  'Густав',
  'Эдвард',
  'Иероним',
  'Анри',
  'Фрида',
  'Франсиско',
  'Перуджино',
  'Тициан',
  'Антонис',
  'Жан-Батист',
  'Каспар',
  'Орест',
  'Эжен',
];

const createUser = () => {
  return {
    id: getRandomPositiveInteger(1, 25),
    url: `photos/${getRandomPositiveInteger(1, 25)}`,
    //avatar: `img/avatar-${getRandomPositiveInteger(1, 25)}.svg`,
    description: '',
    likes: getRandomPositiveInteger(15, 200),
    message: getRandomArrayElement(COMMENT),
    name: getRandomArrayElement(NAMES),
  };
};

const photosDescriptions = Array.from(
  { length: PHOTOS_DESCRIPTIONS_COUNT },
  createUser
);

console.log(photosDescriptions);
