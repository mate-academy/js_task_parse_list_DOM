'use strict';

const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

function sortingListOfPeople(listToSort) {
  const gettingPersonSellary = (person) => {
    return person.dataset.salary
      .split('')
      .filter((symbol) => !isNaN(Number(symbol)))
      .join('');
  };

  const sortedList = [...listToSort].sort(
    (a, b) => gettingPersonSellary(b) - gettingPersonSellary(a)
  );

  list.append(...sortedList);
}

function getEmploees(employeeList) {
  const emplouyeesInfo = [];

  for (const { innerText, dataset } of employeeList) {
    emplouyeesInfo.push({
      name: innerText,
      age: dataset.age,
      position: dataset.position,
      salary: dataset.salary,
    });
  }

  return emplouyeesInfo;
};

sortingListOfPeople(listItems);
getEmploees(listItems);
