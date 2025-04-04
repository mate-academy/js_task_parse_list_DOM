'use strict';

const list = document.querySelector('ul');

const employes = [...list.children];

const res = [];

employes.forEach((item) => {
  function isNum(num) {
    return !isNaN(num);
  }

  const salaryRaw = item.getAttribute('data-salary') || '';
  const salary = salaryRaw.split('').map(Number).filter(isNum).join('');

  const obj = {
    name: item.textContent.replace(/\s+/g, ' ').trim(),
    position: item.getAttribute('data-position'),
    salary: Number(salary),
    age: item.getAttribute('data-age'),
  };

  res.push(obj);
});

function sortList(l) {
  return l.sort((item1, item2) => {
    return item2.salary - item1.salary;
  });
}

sortList(res);

list.innerHTML = '';

function getEmployees(someList) {
  return someList.forEach((item) => {
    const newEl = document.createElement('li');

    newEl.textContent = item.name;
    newEl.setAttribute('data-position', item.position);
    newEl.setAttribute('data-salary', item.salary);
    newEl.setAttribute('data-age', item.age);

    list.append(newEl);
  });
}

getEmployees(res);
