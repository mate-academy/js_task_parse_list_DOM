'use strict';

const arrayOfLi = [...document.querySelectorAll('li')];

function getSortedListBySalary() {
  const sortedList = arrayOfLi.sort((selector1, selector2) => {
    const salaryOne = +selector1.dataset.salary.replaceAll(/[$,]/g, '');
    // remove all $ and ',' and + make a number
    const salaryTwo = +selector2.dataset.salary.replaceAll(/[$,]/g, '');

    if (salaryOne === salaryTwo) {
      return 0;
    }

    return salaryTwo > salaryOne ? 1 : -1;
  });

  const ulTeg = document.getElementsByTagName('ul')[0];

  while (ulTeg.firstChild) {
    ulTeg.removeChild(ulTeg.firstChild);
  }

  sortedList.forEach((li) => {
    ulTeg.appendChild(li);
  });
}
getSortedListBySalary(arrayOfLi);

function getArrayOfemployees() {
  const arrayOfemployees = arrayOfLi.map((employee) => {
    const { position, salary, age } = employee.dataset;
    const nameOfEmployee = employee.innerText;

    return {
      name: nameOfEmployee,
      position,
      salary,
      age,
    };
  });

  return arrayOfemployees;
}

getArrayOfemployees(arrayOfLi);
