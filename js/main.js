function getRandomNumber(numberFrom, numberTo) {
  const factor = numberTo - numberFrom + numberFrom;
  return console.log((factor < 0 || numberTo <= numberFrom) ? 'Введите корректное значение' : Math.floor(Math.random() * factor));
}
getRandomNumber(1, 1000);


function getMaxLengthString(inspectString, maxLength) {
  return console.log((inspectString.length <= maxLength) ? true : false);
}
getMaxLengthString('проверочноеСлово', 20);

