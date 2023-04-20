'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortPeople(listPeople, list) {
  const peopleSortSalary = [...listPeople].sort((str1, str2) => {
    const num2 = str2.dataset.salary
      .replace(/,/g, '').replace('$', '');
    const num1 = parseFloat(str1.dataset.salary
      .replace(/,/g, '').replace('$', ''));

    return num2 - num1;
  });

  peopleSortSalary.forEach(people => list.append(people));
}

sortPeople(employees, listOfEmployees);

function createObjFromEmployess(listPeople) {
  for (let i = 0; i < listPeople.length; i++) {
    const elementContent = listPeople[i].textContent.trim();
    const position = listPeople[i].dataset.position;
    const age = listPeople[i].dataset.age;
    const salary = listPeople[i].dataset.salary;

    const obj = {
      name: elementContent,
      position: position,
      age: age,
      salary: salary,
    };

    return obj;
  }
}

createObjFromEmployess(employees);
