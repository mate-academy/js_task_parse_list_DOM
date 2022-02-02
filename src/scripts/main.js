'use strict';

const list = document.querySelector('ul');

function sortingListOfPeople(listToSort) {
  const gettingPersonSellary = (person) => {
    return person.dataset.salary
      .split('')
      .filter((symbol) => !isNaN(Number(symbol)))
      .join('');
  };

  const sortedList = [...listToSort.children].sort(
    (a, b) => gettingPersonSellary(b) - gettingPersonSellary(a)
  );

  list.append(...sortedList);
}

function getEmployees(employeeList) {
  const employeesInfo = [];

  for (const { innerText, dataset } of employeeList.children) {
    employeesInfo.push({
      name: innerText,
      age: dataset.age,
      position: dataset.position,
      salary: dataset.salary,
    });
  }

  return employeesInfo;
};

sortingListOfPeople(list);
getEmployees(list);
