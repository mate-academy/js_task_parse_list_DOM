'use strict';

const list = document.querySelectorAll('li');

function sortList(someList) {
  return [...someList].sort((item1, item2) => {
    const salary1 = +item1.dataset.salary
      .split(',').join('')
      .split('$').join('');
  console.log(item2.dataset.salary);
    const salary2 = +item2.dataset.salary
      .split(',').join('')
      .split('$').join('');

    return salary2 - salary1;
  });
}



function getEmployees(someList) {
  return [...someList].map(item => (
    {
      name: item.textContent,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    },
  ));
}

sortList(list);
getEmployees(list);
