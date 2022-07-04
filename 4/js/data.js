import {getRandomPositiveInteger} from './util.js';
import {createRandomFromRangeGenerator} from './util.js';
import {getRandomArrayElement} from './util.js';
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

export {photosDescriptions};


