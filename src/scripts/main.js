'use strict';

const listEmployees = document.querySelector('ul');

const convertToNumber = ({ dataset }) => (
   parseFloat(dataset.salary.replace(/\W/g, ''))
);

const sortList = (list) => {
  const sortedList = [...list.children].sort((employeeOne, employeeTwo) => {
    const salaryOne = convertToNumber(employeeOne);
    const salaryTwo = convertToNumber(employeeTwo);

    return salaryTwo - salaryOne;
  });

  listEmployees.append(...sortedList);
};

const getEmployees = (list) => [...list.children].map(employee => (
    {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: +employee.dataset.age,
    }
  ));

sortList(listEmployees);
getEmployees(listEmployees);
