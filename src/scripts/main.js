'use strict';

// select all <li> that are direct child of <ul>
const list = document.querySelectorAll('ul > li');

function sortList(itemsList) {
  // Return new sorted array
  // originaly list = [li, li, li], each <li> is an object.
  // Each <li> object has dataset.
  // Each dataset has the salary key which stores string (salary value)
  return Array.from(itemsList).sort((workerA, workerB) => {
    /* here we praseFloat/praseInt,
        and replace all non-numerical cahracters with nothing.
    */
    const salaryA = parseFloat(workerA.dataset.salary.replace(/[^0-9]/g, ''));
    const salaryB = parseFloat(workerB.dataset.salary.replace(/[^0-9]/g, ''));

    // Sort logic.
    return salaryB - salaryA;
  });
}

// Extract names of employees from sortedList.
function getEmployees(sortedListOfItems) {
  // We extract name from textContent, as there is no dataset with employee name
  // We also remove extra spaces using trim().
  return sortedListOfItems.map((worker) => worker.textContent.trim());
}

// This was optional i guess.
function replaceList(originalList, newList) {
  // clear original list
  originalList.innerHTML = '';
  // iterate over sortedList and push each element to the 'html' list.
  newList.forEach((item) => originalList.appendChild(item));
}

// Variables
const ul = document.querySelector('ul');
const sortedList = sortList(list);

// Usage
getEmployees(sortedList);
replaceList(ul, sortedList);
