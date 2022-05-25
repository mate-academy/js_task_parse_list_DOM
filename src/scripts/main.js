'use strict';

const list = document.body.children[1];

function sortList(ulList) {
  for (const li of list.childNodes) {
    if (li.children !== undefined) {
      const liSalary = li.dataset.salary;
      const salaryNumber = Number(liSalary.slice(1).split(',').join(''));

      li.setAttribute('data-salary', salaryNumber);
    }
  }

  const items = document.querySelectorAll('li');

  const result = [...items].sort((a, b) => b.dataset.salary - a.dataset.salary);

  for (const li in result) {
    const newLi = result[li];

    list.append(newLi);
  }

  return list;
}

sortList(list);

function getEmployees(ulList) {
  const array = [];
  const items = document.querySelectorAll('li');

  for (const item of items) {
    const position = item.dataset.position;
    const salary = item.dataset.salary;
    const age = item.dataset.age;
    const nameLi = item.textContent.trim();

    const obj = {
      'name': nameLi,
      'data-position': position,
      'data-salary': salary,
      'data-age': age,
    };

    array.push(obj);
  }

  return array;
}

getEmployees(list);
