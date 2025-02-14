'use strict';

function getEmployees(list) {
  return list.map((employe) => ({
    name: employe.textContent.trim(),
    position: employe.dataset.position,
    salary: parseFloat(employe.dataset.salary.replace(/[$,]/g, '')),
    age: parseInt(employe.dataset.age),
  }));
}

function sortList(list) {
  return list.sort((a, b) => b.salary - a.salary);
}

function updateList(sortedEmployees) {
  const ul = document.getElementById('employee-list');

  ul.innerHTML = ''; // Очищаємо список

  sortedEmployees.forEach((emp) => {
    const li = document.createElement('li');

    li.textContent = emp.name;
    li.dataset.position = emp.position;
    li.dataset.salary = `$${emp.salary.toLocaleString()}`;
    li.dataset.age = emp.age;
    ul.appendChild(li); // Додаємо оновлений елемент у список
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('#employee-list li');
  const employeesArray = Array.from(listItems);
  const employees = getEmployees(employeesArray); // Отримуємо об'єкти
  const sortedEmployees = sortList(employees);

  updateList(sortedEmployees);
});
