'use strict';

// write code here
const elements = [...document.querySelectorAll('li')];

function sortList(listOfEmpl) {
  let sortedEmpl = [];
  sortedEmpl = listOfEmpl.sort(function(a, b) {
    if (convertSalary(a.dataset['salary']) !== convertSalary(b.dataset['salary'])) {
     return convertSalary(a.dataset['salary']) < convertSalary(b.dataset['salary']) ? 1 : -1
    } else {
      return a.innerText > b.innerText ? 1 : -1
    }
  })
  return sortedEmpl;
};

function getEmployees(elemenst) {
  let result = [];
  let sortedElements = sortList(elements)

  for (let elem of sortedElements) {
    result.push({
      'name': elem.innerText,
      'position': elem.dataset['position'],
      'salary': elem.dataset['salary'],
      'age': elem.dataset['age']

    })
  }

  return result;
}

function convertSalary(value){
  let newValue = value.replace('$','').replace(',', '')

  return +newValue;
}

console.log(getEmployees(elements));
