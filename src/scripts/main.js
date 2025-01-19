'use strict';

const listElement = document.querySelector('ul');
const listItems = [...document.querySelectorAll('li')];

function sortList(list) {
  return list.sort((a, b) => {
    const salaryA = formatSalary(a.getAttribute('data-salary'));
    const salaryB = formatSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });
}

function formatSalary(num) {
  return +num.slice(1).replace(/,/g, '');
}

function getEmployees(list) {
  return list.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position || 'Unknown',
    salary: formatSalary(li.dataset.salary) || 0,
    age: +li.dataset.age || 'N/A',
  }));
}

const sortedList = sortList(listItems);

listElement.innerHTML = '';

sortedList.forEach((el) => listElement.append(el));

getEmployees(sortedList);
