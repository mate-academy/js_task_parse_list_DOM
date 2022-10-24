'use strict';

let listItems = document.querySelectorAll('li')

function sortItems(list) {
  return [...list].sort((a, b) => (
    Number(b.dataset.salary.replace(/[^0-9.-]+/g,"")) - 
    Number(a.dataset.salary.replace(/[^0-9.-]+/g,""))
    ) 
  )
}

function sortList (list) {
  const listContainer = document.querySelector('ul')
  listContainer.append(...sortItems(list))
}

function getEmployees (list) {
  return [...list].map(x => ({
    name: x.innerText,
    position: x.dataset.position,
    salary: x.dataset.salary,
    age: x.dataset.age,
  }))
}

sortList(listItems)
getEmployees(listItems)
