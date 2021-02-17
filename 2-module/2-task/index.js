function isEmpty(obj) {
  // ваш код...
  for (let prop in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}