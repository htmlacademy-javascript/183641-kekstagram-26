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

const OBJECT_COUNT = 25;

// Описания фотографий
const DESCRIPTION = [
  'Кот, который гуляет сам по себе',
  'Хочу в туалет',
  'Ем мышь',
  'Сейчас получу люлей',
  'Хозяин погладил',
  'Хочу спать',
  'Выгнали на улицу',
  'Не хочу быть кошкой',
  'Хочу быть псом',
  'Не хочу гулять',
  'Ням-ням',
  'Ничего не понимаю',
  'Как это сделать?',
  'Ой, всё!',
  'Я устал!',
  'И чО?',
  'Мур-мур',
  'Наконец-то весна!',
  'Хочу котят',
  'Хватит меня фоткать',
  'Как надоела жара',
  'Дай пожрать',
  'Хочу в деревню',
  'Кошачий день',
  'Ну вот и всё',
];

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

// В переменных - записана функция генератор, возвращающая случайное не повторяющееся число
const generatePhotoId = createRandomFromRangeGenerator(0, OBJECT_COUNT);
const generatePhotoUrl = createRandomFromRangeGenerator(1, OBJECT_COUNT);
const generateCommentsId = createRandomFromRangeGenerator(1, 135);

// Функция создания объекта
const createUser = () => {
  return {
    id: `${generatePhotoId()}`,
    url: `photos/${generatePhotoUrl()}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: [
      {
        id: generateCommentsId(),
        avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
        message: getRandomArrayElement(COMMENT),
        name: getRandomArrayElement(NAMES),
      }
    ],
  };
};

// Массив для хранения созданных 25 объектов
const photosDescriptions = Array.from(
  { length: OBJECT_COUNT },
  createUser
);
