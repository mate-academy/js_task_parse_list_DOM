'use strict';

const list = document.querySelectorAll('li');

const employees = [...list].map((item) => {
  const person = {
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  };

  return person;
});

function salaryToNumber(value) {
  return Number(value.slice(1).replaceAll(',', ''));
}

function sortBySalary() {
  employees.sort((itemOne, itemTwo) => {
    return salaryToNumber(itemTwo.salary) - salaryToNumber(itemOne.salary);
  });
}

function setNewOrder() {
  list.forEach((item, index) => {
    // eslint-disable-next-line no-shadow
    const { position, salary, name, age } = employees[index];

    item.dataset.salary = salary;
    item.dataset.age = age;
    item.dataset.position = position;
    item.innerText = name;
  });
}

sortBySalary();
setNewOrder();
