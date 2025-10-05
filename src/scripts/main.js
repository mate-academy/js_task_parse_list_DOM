'use strict';

// function sortList(list) {
//     const data = document.querySelector('data-salary')
//     const newList = [...list].map((data) =>
//     data.dataset.selery.replace('$', '').replace(',', ''),
// );
// let counter = 0;

// for (let i = 0; i < newList.length; i++) {
//     if (Number(newList[i + 1]) <= Number(newList[i])) {
//         counter++
//     }
// }
//   function getEmployees(list) {
//     return newList;
//   }
// }

// getEmployees(newList);
// sortList(newList);

//

'use strict';

const parseSalary = (s) => Number(s.replace(/[^0-9.-]+/g, ''));

function sortList(list) {
  if (!list || !list.children.length) {
    return;
  }

  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  if (!list || !list.children.length) {
    return [];
  }

  const currentListItems = Array.from(list.children);

  const employers = currentListItems.map((item) => {
    const nameEmp = item.dataset.name;
    const salary = parseSalary(item.dataset.salary);
    const position = item.dataset.position;
    const age = Number(item.dataset.age);

    return {
      name: nameEmp,
      salary: salary,
      position: position,
      age: age,
    };
  });

  return employers;
}

const employeeList = document.querySelector('ul');

if (employeeList) {
  sortList(employeeList);

  const employees = getEmployees(employeeList);

  // eslint-disable-next-line no-console
  console.log('Employees data:', employees);
}
