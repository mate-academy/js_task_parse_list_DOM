'use strict';

const allItems = [];

document.querySelectorAll('.list li').forEach((element) => {
  const text = element.textContent;

  allItems.push(text);
});

function helper(string) {
  const cleanString = string.replace(/,/g, '');

  return Number(cleanString);
}

function sortList(list) {
  const notAllLi = list.querySelectorAll('li');
  const Allli = [...notAllLi];

  Allli.sort((a, b) => {
    const salaryA = helper(a.dataset.salary);
    const salaryB = helper(b.dataset.salary);

    return salaryB - salaryA;
  });

  Allli.forEach((li) => list.append(li));
}

function getEmployees(list) {
  const employees = [];

  list.querySelectorAll('li').forEach((item) => {
    const employeeName = item.textContent.split(' ')[0];
    const salary = helper(item.dataset.salary);

    employees.push({
      name: employeeName,
      salary: salary,
    });
  });

  return employees;
}

const mainList = document.querySelector('.list');

sortList(mainList);
getEmployees(mainList);
