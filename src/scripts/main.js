'use strict';

const employeesList = document.querySelector('ul')

function sortList(list) {
  const items = [...list.querySelectorAll('li')]

  items.sort((a, b) =>
    parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary)
  )
  list.innerHTML = ''
  items.forEach(item => list.append(item))
}

function parseSalary(salaryString) {
  const item = salaryString.replace('$', '');
  const finalItem = item.replaceAll(',', '')

  return +finalItem;
}

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];

  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: +item.dataset.age,
    }
  })
}

sortList(employeesList)