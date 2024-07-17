'use strict';

const employerList = [...document.querySelectorAll('li')];
const employers = [];

function sortList(ListToSort) {
  ListToSort.forEach((element) => {
    const employer = {
      name: element.outerText,
      salary: element.dataset.salary.replace(/\$/, ''),
      position: element.dataset.position,
      age: element.dataset.age,
    };

    employers.push(employer);
  });
}

function getEmployers(list) {
  list.sort((a, b) => {
    const aSalary = parseFloat(a.salary.replace(/,/g, ''));
    const bSalary = parseFloat(b.salary.replace(/,/g, ''));

    return bSalary - aSalary;
  });
}
sortList(employerList);
getEmployers(employers);

const listContainer = document.querySelector('ul');

listContainer.innerHTML = '';

employers.forEach((item) => {
  const li = document.createElement('li');

  li.dataset.salary = item.salary;
  li.dataset.position = item.position;
  li.dataset.age = item.age;
  li.innerText = item.name;
  listContainer.appendChild(li);
});
