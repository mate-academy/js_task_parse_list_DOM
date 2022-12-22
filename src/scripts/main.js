'use strict';

const liElements = document.querySelectorAll('li');
const ulElement = document.querySelector('ul');
const arrayOfNodeList = [...liElements];

function convertToNumber(salary) {
  return +salary.slice(1).replace(',', '');
}

function sortList(list) {
  return list.sort((a, b) => {
    return (
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
    );
  });
};

const newLi = sortList(arrayOfNodeList);

liElements.forEach(el => el.remove());

ulElement.insertAdjacentHTML('afterbegin', `
    ${newLi.map(person => `
      ${person.outerHTML}
    `).join('')}
`);

function getEmployees(list) {
  const arrayObj = list.map(person => {
    const clearName = person.innerText
      .slice(2, person.innerText.lastIndexOf('/n'))
      .trim();

    const personInfo = {
      name: clearName,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    return personInfo;
  });

  return arrayObj;
};

getEmployees(newLi);
