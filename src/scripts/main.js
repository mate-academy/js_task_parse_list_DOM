'use strict';

const convertSalary = (salary) =>
  +salary.replaceAll('$', '').replaceAll(',', '');

function getEmployees(list) {
  return [...list.children].map((el) => {
    const fullName = el.textContent.trim();

    return { ...el.dataset, name: fullName };
  });
}

function sortList(list) {
  const newList = getEmployees(list)
    .sort(
      (person1, person2) =>
        convertSalary(person2.salary) - convertSalary(person1.salary),
    )
    .map((person) => {
      const element = document.createElement('li');

      element.setAttribute('data-position', `${person.position}`);
      element.setAttribute('data-salary', `${person.salary}`);
      element.setAttribute('data-age', `${person.age}`);
      element.textContent = `${person.name}`;

      return element;
    });

  list.replaceChildren(...newList);
}

const listItem = document.querySelector('ul');

sortList(listItem);
getEmployees(listItem);
