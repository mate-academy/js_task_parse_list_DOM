'use strict';

const list = document.querySelector('ul');

function fromStrToNumber(salaryString) {
  return +salaryString.slice(1).split(',').join('');
}

function sortList(listElement) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = fromStrToNumber(a.dataset.salary);
    const salaryB = fromStrToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  listElement.innerHTML = '';
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(listEmployee) {
  const items = Array.from(listEmployee.querySelectorAll('li'));

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
