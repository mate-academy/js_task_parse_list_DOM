'use strict';

function replaceCharOuter(string) {
  let stringOuter = string;

  function replaceCharInner(char) {
    stringOuter = stringOuter.replaceAll(char, '');
  }

  return {
    deleteChar(char) {
      return replaceCharInner(char);
    },
    value() {
      return stringOuter;
    },
  };
}

const parentElement = document.querySelector('ul');
const elements = [...document.querySelectorAll('li')];

elements.forEach((element) => {
  const charsToDelete = [',', '$'];
  const replaceChar = replaceCharOuter(element.dataset.salary);

  charsToDelete.forEach((char) => replaceChar.deleteChar(char));

  element.dataset.salary = replaceChar.value();
});

elements.sort(
  (a, b) => parseInt(b.dataset.salary) - parseInt(a.dataset.salary),
);

parentElement.innerHTML = '';

elements.forEach((element) => {
  parentElement.appendChild(element);
});
