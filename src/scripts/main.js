'use strict';

const salaryToNumber = function(salary) {
  return +salary.substr(1).split(',').join('');
};

const sortList = function(employees) {
  const employeesSorted = [...employees.children].sort((personA, personB) => {
    let personASalary = personA.dataset.salary;
    let personBSalary = personB.dataset.salary;

    personASalary = salaryToNumber(personASalary);
    personBSalary = salaryToNumber(personBSalary);

    return personBSalary - personASalary;
  });

  employees.innerHTML = `${employeesSorted.map(person => `
    <li
      data-position=${person.dataset.position}
      data-salary=${person.dataset.salary}
      data-age=${person.dataset.age}
    >
      ${person.innerText}
    </li>`).join('')}`;
};

const getEmployees = function(employees) {
  const employeesArray = [...employees.children].map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });

  return employeesArray;
};

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
