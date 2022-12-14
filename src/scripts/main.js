'use strict';

// write code here

const [...list] = document.querySelectorAll('li');

function sortList(list) {
    list.sort((a, b) => b.salary - a.salary);

    return list;
}

function getEmployees(people) {
    return people.map((elem) => {
        return {
            name: elem.textContent,
            position: elem.dataset.position,
            salary: +elem.dataset.salary.slice(1).split(',').join(''),
            age: +elem.dataset.age,
        };
    });
}

const sortedList = sortList(getEmployees(list));

sortedList.forEach((element, index) => {
  list[index].textContent = element.name;
  list[index].dataset.salary = element.salary;
});
