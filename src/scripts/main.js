'use strict';

const peopleList = document.body.children[1].children;

for (const person of peopleList) {
  person.dataset['salaryNum'] = +(person.dataset['salary'].replace(/,/g, ''))
    .replace('$', '');
}

const sortlist = [...peopleList].sort((x, y) =>
  ((y.dataset['salaryNum']) - (x.dataset['salaryNum'])));

const sortListNames = [];

for (const person of sortlist) {
  sortListNames.push(person.innerText);
}

for (let i = 0; i <= peopleList.length; i++) {
  peopleList[i].innerText = sortListNames[i];
}
