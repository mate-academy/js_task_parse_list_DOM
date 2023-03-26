'use strict';

const list = document.getElementsByTagName('li');
const people = [];

for (const item of list) {
  const person = {
    name: item.innerHTML.trim(),
  };

  Object.assign(person, item.dataset);

  people.push(person);

  people.sort((a, b) =>
    (conversionToNumber(b.salary) - conversionToNumber(a.salary)));
}

for (let i = 0; i < people.length; i++) {
  const { salary, age, position } = people[i];

  list[i].dataset.position = position;
  list[i].dataset.salary = salary;
  list[i].dataset.age = age;
  list[i].innerHTML = people[i].name;
}

function conversionToNumber(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (+string[i] || +string[i] === 0) {
      result += string[i];
    }
  }

  return +result;
}
