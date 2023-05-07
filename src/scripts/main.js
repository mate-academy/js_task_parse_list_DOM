'use strict';

// we get a list of employees
const listNode = document.querySelector('ul');

const sortList = list => {
  // we get all the elements of the list
  const listItems = [...list.children];

  // we sorting employees by decreasing salary
  listItems.sort((empl1, empl2) => {
    const salary1 = parseSalary(empl1.dataset.salary);
    const salary2 = parseSalary(empl2.dataset.salary);

    return salary2 - salary1;
  });

  // we move list items to new locations
  list.append(...listItems);
};

const getEmployees = list => {
  const listItems = [...list.children].map(employee => {
    const fullName = employee.innerText;
    const { position, salary, age } = employee.dataset;

    return {
      name: fullName,
      position,
      salary: parseSalary(salary),
      age: +age,
    };
  });

  return listItems;
};

// we remove commas and dollar signs from wages and convert to a number
const parseSalary = salary => +salary.replace(/[$,]/g, '');

sortList(listNode);
getEmployees(listNode);
