'use strict';

const employeeList = document.querySelector('ul');

function getSalaryValue(element) {
  const salaryString = element.dataset.salary;
  const cleanSalary = salaryString.replace(/\$|,/g, '');

  return Number(cleanSalary);
}

function sortList(list) {
  const listItems = Array.from(list.children);

  // USUŃ: const itemsToSort = listItems.slice(0, 10);
  const itemsToSort = listItems; // użyj całej listy

  itemsToSort.sort((a, b) => {
    const salaryA = getSalaryValue(a);
    const salaryB = getSalaryValue(b);

    return salaryB - salaryA;
  });

  // Dodaj posortowane elementy z powrotem do listy
  for (const item of itemsToSort) {
    list.appendChild(item);
  }
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalaryValue(item),
      age: Number(item.dataset.age),
    };
  });
}

// Posortuj listę
sortList(employeeList);

// Pobierz tablicę pracowników
getEmployees(employeeList);
