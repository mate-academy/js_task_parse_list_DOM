'use strict';

const employees = document.querySelectorAll('li');
const employeesList = document.querySelector('ul');

const sortEmployees = (list) => {
  const sortedList = [...list].sort((prev, curr) => {
    const prevNumber = +prev.dataset.salary.replace(/[$,]/g, '');
    const currNumber = +curr.dataset.salary.replace(/[$,]/g, '');

    return currNumber - prevNumber;
  });

  employeesList.append(...sortedList);
};

const getEmployees = (list) => {
  const peopleList = [];

  [...list].forEach(person => {
    peopleList.push({
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  });

  return peopleList;
};

sortEmployees(employees);
getEmployees(employees);
