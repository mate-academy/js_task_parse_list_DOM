'use strict';

const workers = [...document.querySelectorAll('li')];

function sortBySalary() {
  workers.sort((a, b) => {
    const secondSalary = parseInt(b.dataset.salary.replaceAll('$', ''));
    const firstSalary = parseInt(a.dataset.salary.replaceAll('$', ''));

    return secondSalary - firstSalary;
  });

  document.querySelector('ul').innerHTML = '';

  for (let i = 0; i < workers.length; i++) {
    document.querySelector('ul').append(workers[i]);
  }
}

function workersArray() {
  const array = workers.reduce((arr, el) => {
    arr.push({
      name: el.textContent,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    });

    return arr;
  }, []);

  return array;
}

sortBySalary();
workersArray();

// write code here
