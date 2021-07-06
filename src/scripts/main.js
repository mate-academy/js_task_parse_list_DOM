'use strict';

const peoplesList = document.querySelector('ul');
const listOfPeoples = document.querySelectorAll('li');

function sortList(peopleList) {
  const sortedPeoples = [...peopleList];

  const salary = (toNumber) => {
    return +toNumber.dataset.salary.slice(1).split(',').join('');
  };

  sortedPeoples.sort((currentEmployee, nextEmployee) => {
    const currentEmployeeSalary = salary(currentEmployee);
    const nextEmployeeSalary = salary(nextEmployee);

    return nextEmployeeSalary - currentEmployeeSalary;
  });

  peoplesList.append(...sortedPeoples);
};

function getEmployees(peopleList) {
  const arrayOfPeoples = [...peopleList];

  return arrayOfPeoples.map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
}

sortList(listOfPeoples);
getEmployees(listOfPeoples);
