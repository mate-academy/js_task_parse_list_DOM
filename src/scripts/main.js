'use strict';

const li = document.querySelectorAll('li');

class Employer {
  constructor(fullName, position, salary, age) {
    this.name = fullName;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

function getEmployer(list) {
  const employer = [];

  for (let i = 0; i < list.length; i++) {
    employer[employer.length] = new Employer(list[i].innerText,
      list[i].dataset.position,
      +list[i].dataset.salary.replace(/\D/g, ''),
      list[i].dataset.age);
  }

  return employer;
}

function listSorted(list) {
  list.sort((a, b) => b.salary - a.salary).forEach(item => {
    item.salary = '$' + item.salary.toLocaleString();
  });

  return list;
}

function setSortedList(list, sortedList) {
  sortedList.forEach((employer, i) => {
    list[i].innerText = employer.name;
    list[i].dataset.position = employer.position;
    list[i].dataset.salary = employer.salary;
    list[i].dataset.age = employer.age;
  });
}

const employers = getEmployer(li);
const sortedEmployers = listSorted(employers);

setSortedList(li, sortedEmployers);
