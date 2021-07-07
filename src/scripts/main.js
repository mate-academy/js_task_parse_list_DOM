'use strict';

const employeesList = document.querySelectorAll('li');
const employeesListArr = Array.from(employeesList);

function sortList(listToSort) {
  return listToSort.sort((a, b) => {
    const current = parseInt(a.dataset.salary.replace(/[$,]/g, ''));
    const next = parseInt(b.dataset.salary.replace(/[$,]/g, ''));

    return next - current;
  });
};

const sortedEmployees = sortList(employeesListArr);

function getEmployees(listofEmployees) {
  return listofEmployees.map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

const namedEmployees = getEmployees(sortedEmployees);

for (let i = 0; i < employeesList.length; i++) {
  employeesList[i].innerText = namedEmployees[i].name;
  employeesList[i].dataset.position = namedEmployees[i].position;
  employeesList[i].dataset.salary = namedEmployees[i].salary;
  employeesList[i].dataset.age = namedEmployees[i].age;
}
