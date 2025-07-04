'use strict';

// write code here

const leElement = document.querySelectorAll('li');
const ulElement = document.querySelector('ul');

function sortList() {
  const sortElems = Array.prototype.slice.call(leElement).sort(function (a, b) {
    return (
      Number(a.dataset.salary.replace(/[$,]/g, '')) -
      Number(b.dataset.salary.replace(/[$,]/g, ''))
    );
  });

  for (let i = 0; i < sortElems.length; i++) {
    ulElement.prepend(sortElems[i]);
  }
}

function getEmployees(persons) {
  const result = [];

  persons.forEach((el) => {
    const obj = {
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };

    result.push(obj);
  });

  return result;
}

sortList(leElement);
getEmployees(leElement);
