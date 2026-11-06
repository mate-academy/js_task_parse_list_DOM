'use strict';

// write code here
const listE = document.querySelector('ul');

function sortList(list) {
  const listEmployess = Array.from(list.querySelectorAll('li'));
  const sortedList = listEmployess.sort((a, b) => {
    return (
      Number(b.dataset.salary.replaceAll('$', '').replaceAll(',', '')) -
      Number(a.dataset.salary.replaceAll('$', '').replaceAll(',', ''))
    );
  });

  sortedList.forEach((employee) => {
    list.append(employee);
  });
}

function getEmployees(list) {
  const listEmployess = Array.from(list.querySelectorAll('li'));

  return listEmployess.map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(listE);
getEmployees(listE);
