'use strict';

// write code here
const list = document.querySelectorAll('li');

function sortedList(item) {
  const sortList = [...item].sort((prev, current) => {
    return current.dataset.salary
      .match(/\d+/g).join('')
      - prev.dataset.salary
        .match(/\d+/g).join('');
  });

  document.querySelector('ul').append(...sortList);
}

function getEmployees(item) {
  return [...item].reduce((prev, current) => {
    return [
      ...prev,
      {
        name: current.innerText,
        position: current.dataset.position,
        salary: current.dataset.salary,
        age: current.dataset.age,
      },
    ];
  }, []);
};

sortedList(list);
getEmployees(list);
