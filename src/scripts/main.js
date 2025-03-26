'use strict';

const allLi = document.querySelector('ul').children;

const sortList = (list) => {
  const data = Array.from(list);

  data.forEach((d) => {
    d.dataset.salary = +d.dataset.salary.slice(1).replace(',', '.');
    d.dataset.name = d.textContent.trim();
  });

  data.sort((a, b) => b.dataset.salary - a.dataset.salary);
  data.forEach((d) => list[0].parentElement.appendChild(d));
};

const getEmployees = (list) => {
  const data = Array.from(list);

  return data.map((d) => ({
    name: d.dataset.name,
    position: d.dataset.position,
    age: d.dataset.age,
    salary: d.dataset.salary,
  }));
};

sortList(allLi);
getEmployees(allLi);
