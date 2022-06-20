'use strict';

const peopleList = [...document.querySelectorAll('li')];

const sortSalary = (li1, li2) => {
  const getNumber = (str) => {
    return Number(str.slice(1).split(',').join(''));
  };
  const salary1 = getNumber(li1.dataset.salary);
  const salary2 = getNumber(li2.dataset.salary);

  return salary1 - salary2;
};

peopleList.sort(sortSalary);

window.console.log(peopleList);

for (const person of peopleList) {
  document.querySelector('ul').prepend(person);
}
