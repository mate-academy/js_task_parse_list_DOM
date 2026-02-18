'use strict';

const li = document.querySelectorAll('li');
const father = li[0].parentNode;

function sortList(list) {
  const resultList = Array.from(list).sort((firstPerson, secondPerson) => {
    const firstPersonSalary = parseSalary(firstPerson.dataset.salary, 'salary');
    const secondPersonSalary = parseSalary(
      secondPerson.dataset.salary,
      'salary',
    );

    return secondPersonSalary - firstPersonSalary;
  });

  for (const result of resultList) {
    if (father) {
      father.append(result);
    }
  }

  return resultList;
}

function getEmployees(list) {
  const arraysPersons = [];

  for (const oneLi of list) {
    arraysPersons.push({
      name: oneLi.textContent,
      position: oneLi.dataset.position,
      salary: parseSalary(oneLi.dataset.salary, 'salary'),
      age: parseSalary(oneLi.dataset.age, 'age'),
    });
  }

  return arraysPersons;
}

sortList(li);
getEmployees(sortList(li));

function parseSalary(str, what) {
  if (what === 'salary') {
    return Number(str.slice(1).split(',').join('.'));
  }

  if (what === 'age') {
    return Number(str);
  }
}
