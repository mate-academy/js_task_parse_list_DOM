'use strict';

const list = document.querySelector('ul');
// const liElements = [...document.querySelectorAll('li')];
// const list = document.querySelector('ul');

// const employes = liElements.map((li) => ({
//   name: li.innerText,
//   position: li.dataset.position,
//   salary: convertToNumber(li.dataset.salary),
//   age: li.dataset.age,
// }));

// function convertToNumber(value) {
//   const number = parseFloat(value.slice(1));

//   return number;
// }

function sortList(people) {
  const sortedEmployees = [...list.children];

  sortedEmployees.sort((a, b) => {
    const salary1 = a.dataset.salary.replace(/[$,]/g, '');
    const salary2 = b.dataset.salary.replace(/[$,]/g, '');

    return salary2 - salary1;
  });
  sortedEmployees.forEach((elem) => list.appendChild(elem));
}

function getEmployees(people) {
  const employees = [];

  for (const person of people.children) {
    const personName = person.textContent.trim();
    const { age, position, salary } = person.dataset;
    const cleanSalary = parseFloat(salary.replace(/[$,]/g, ''));
    const numberAge = parseInt(age);

    employees.push({
      salary: cleanSalary,
      age: numberAge,
      position,
      name: personName,
    });
  }

  return employees;
}
sortList(list);

getEmployees(list);
