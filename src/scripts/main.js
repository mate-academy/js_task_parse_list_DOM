'use strict';

const employees = document.querySelectorAll('li');

function getNumberFromString(value) {
  const result = Number(
    value.dataset.salary.replace(/,/g, '').replace('$', '')
  );

  return result;
}

function sortList(arr) {
  const newList = arr.sort((el, nextEl) => getNumberFromString(nextEl)
  - getNumberFromString(el));

  const list = document.querySelector('ul');

  newList.forEach(item => {
    list.append(item);
  });
}

function getEmployees(arr) {
  return arr.reduce((prev, item) => {
    const obj = {};

    obj.name = item.innerText.trim();
    obj.position = item.dataset.position;
    obj.salary = item.dataset.salary;
    obj.age = item.dataset.age;

    prev.push(obj);

    return prev;
  }, []);
}

sortList([...employees]);
getEmployees([...employees]);
