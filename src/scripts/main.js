'use strict';

const element = document.body.children[1].children;
const sortlist = [...element].sort((x, y) =>
  (+(((y.dataset['salary']).replace(/,/g, '')).replace('$', '')))
  - (+(((x.dataset['salary']).replace(/,/g, '')).replace('$', ''))));
const sortListNames = [];

for (const person of sortlist) {
  sortListNames.push(person.innerText);
}

for (let i = 0; i <= element.length; i++) {
  element[i].innerText = sortListNames[i];
}
