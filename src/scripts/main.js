'use strict';

const listOfEmployees = document.querySelector('ul');
const employeesArr = Array.from(listOfEmployees.children);

console.log(employeesArr);

function sortList(array) {
    array.sort((a, b) => {
        const firstSalary = a.dataset.salary.slice(1).split(',').join('');
        const secondSalary = b.dataset.salary.slice(1).split(',').join('');

        return Number(secondSalary) - Number(firstSalary)});

    array.forEach(person => {
        listOfEmployees.appendChild(person);
});
}

function getEmployees(array) {
    return array.map(person => {
        return {
            name: person.outerText,
            position: person.dataset.position,
            salary: person.dataset.salary,
            age: person.dataset.age,
        }
    });
}



sortList(employeesArr);

console.log(getEmployees(employeesArr));


