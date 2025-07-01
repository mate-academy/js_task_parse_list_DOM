'use strict';

const peopleList = Array.from(document.querySelectorAll('li'));

const getEmployees = (list) => {
  return list.map((person) => {
    const employeeName = person.textContent;
    const position = person.dataset.position;
    const salary = +person.dataset.salary.replace(/[$,]/g, '');
    const age = +person.dataset.age;

    return {
      name: employeeName,
      position,
      salary,
      age,
    };
  });
};

// eslint-disable-next-line no-unused-vars
const employeesList = getEmployees(peopleList);

const sortList = (list) => {
  return list.sort((person1, person2) => {
    const salary1 = +person1.dataset.salary.replace(/[$,]/g, '');
    const salary2 = +person2.dataset.salary.replace(/[$,]/g, '');

    return salary2 - salary1;
  });
};

const sortedList = sortList(peopleList);

const listContainer = document.querySelector('ul');

listContainer.innerHTML = '';

sortedList.forEach((item) => {
  listContainer.appendChild(item);
});
