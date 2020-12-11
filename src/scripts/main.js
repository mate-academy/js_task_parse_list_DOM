'use strict';

function formatSalary(str) {
  return Number(str.replace(/,|\$/g, ''));
}

document.addEventListener('DOMContentLoaded', () => {
  const sortBySalary = (elems) => {
    return [...elems].sort((prev, next) =>
      formatSalary(next.dataset.salary) - formatSalary(prev.dataset.salary));
  };

  const getEmployees = (elems) => {
    const result = [];
    const arr = [...elems];

    arr.forEach(elem => {
      result.push({
        name: elem.innerText,
        position: elem.innerText,
        salary: elem.dataset.salary,
        age: elem.dataset.age,
      });
    });

    return result;
  };

  const list = document.getElementsByTagName('ul')[0];

  const sorted = sortBySalary([...list.children]);

  sorted.forEach((elem) => {
    list.append(elem);
  });

  getEmployees(sorted);
});
