'use strict';

const employeesArray = document.querySelectorAll('li');
const employeesList = [];
const ulElement = document.querySelector('ul');

// Перебираем элементы и добавляем объекты в массив
employeesArray.forEach((employee) => {
  employeesList.push({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: Number(employee.dataset.salary.replace('$', '').replace(',', '')),
    age: employee.dataset.age,
  });
});

// Очищается список еллементов
ulElement.innerHTML = '';

employeesList
  .sort((a, b) => b.salary - a.salary)
  .forEach((employee) => {
    const li = document.createElement('li');

    li.textContent = `${employee.name}`;
    li.setAttribute('data-salary', employee.salary);
    ulElement.appendChild(li);
  });
