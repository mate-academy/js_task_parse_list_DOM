'use strict';

// Working with data
// Making array from tag nodes
const dataList = Array.from(document.querySelectorAll('li'));

//  Function to convert USD to numbers
function convertation(arg) {
  return parseFloat(arg.replace(/[$,]/g, ''));
}

// Function getEmployees
function getEmployees(data) {
  const listOfEmployees = dataList.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: +item.dataset.age,
  }));

  return listOfEmployees;
}

const list = getEmployees(dataList);

// Getting sorted list
function sortList(dataToSort) {
  return dataToSort.sort((a, b) => {
    const salaryA = convertation(a.salary);
    const salaryB = convertation(b.salary);

    return salaryB - salaryA;
  });
}

const sortedItems = sortList(list);

// Reset the main list
const originalList = document.querySelector('ul');

originalList.innerHTML = '';

// Create new sorted list
sortedItems.forEach((item) => {
  const li = document.createElement('li');

  li.textContent = `${item.name}`;
  li.dataset.position = `${item.position}`;
  li.dataset.salary = `${item.salary}`;
  li.dataset.age = `${item.age}`;
  originalList.appendChild(li);
});
