'use strict';

function findEmployeeList() {
  const employeeList = document.querySelector('#employee-list');

  if (!employeeList) {
    return;
  }

  const employees = [...employeeList.children].map(({ dataset }) => ({
    name: dataset.name || '',
    position: dataset.position || '',
    salary: parseFloat(dataset.salary?.match(/-?\d+(\.\d+)?/)?.[0]) || 0,
    age: Number(dataset.age?.match(/\d+/)?.[0]) || 0,
  }));

  employees.sort((a, b) => b.salary - a.salary);

  const fragment = document.createDocumentFragment();

  employees.forEach(({ name: employeeName, position, salary, age }) => {
    const li = document.createElement('li');

    li.dataset.name = employeeName;
    li.dataset.position = position;
    li.dataset.salary = salary;
    li.dataset.age = age;
    li.textContent = `${employeeName} - ${position}, $${salary}, ${age} years`;
    fragment.appendChild(li);
  });

  employeeList.innerHTML = '';
  employeeList.appendChild(fragment);
}

findEmployeeList();
