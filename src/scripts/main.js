'use strict';

const allEmployees = document.querySelectorAll('ul li');

function conversionSalaryInNum(str) {
  return Number(str.slice(1).replace(/,/g, ''));
}

function getEmployees(list) {
  return Array.from(list).map((item) => {
    return {
      name: item.textContent.trim(),
      ...item.dataset,
    };
  });
}

function sortList(list) {
  const arr = Array.from(list);

  arr.sort((a, b) => {
    const firstSalary = conversionSalaryInNum(a.dataset.salary);
    const secondSalary = conversionSalaryInNum(b.dataset.salary);

    return secondSalary - firstSalary;
  });

  const parentEl = arr[0].parentElement;

  arr.forEach((item) => parentEl.append(item));
}

sortList(allEmployees);

getEmployees(allEmployees);
