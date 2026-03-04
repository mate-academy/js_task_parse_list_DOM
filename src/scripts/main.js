'use strict';

const listOfEmployees = document.querySelector('ul');
const employeesArr = Array.from(listOfEmployees.children);

function salaryToNumber (salaryString) {
    return Number(salaryString.dataset.salary.slice(1).split(',').join(''));
}

function sortList(array) {
    array.sort((a, b) => {
        return salaryToNumber(b) - salaryToNumber(a)});

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

getEmployees(employeesArr);


