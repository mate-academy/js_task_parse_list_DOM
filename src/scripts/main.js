'use strict';

const list = document.querySelector('ul');

function norm(salary) {
  return +salary.split(',').join('').slice(1);
}

function sort(l) {
  const childrenCopy = [...l.children];

  childrenCopy.sort((a, b) => {
    return norm(b.dataset.salary) - norm(a.dataset.salary);
  });

  childrenCopy.forEach((emp) => l.append(emp));
}

function getEmps(l) {
  return [...l.children].reduce((arr, child) => {
    arr.push({
      name: child.innerText,
      position: child.dataset.position,
      age: child.dataset.age,
      salary: child.dataset.salary,
    });

    return arr;
  }, []);
}

sort(list);
getEmps(list);
