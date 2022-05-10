'use strict';

const query = document.querySelectorAll('li');
const list = [...query];

function strToDigitArr(string_){
    const arrString = string_.split('');
    const arrDigit = arrString.filter(letter => /^[0-9]$/.test(letter));
    const resultNumber = Number(arrDigit.join(''));
    return resultNumber;
}

function sortList(list) {
    return list.sort((x, y) => strToDigitArr(y.getAttribute('data-salary')) - strToDigitArr(x.getAttribute('data-salary')));
}

function getEmployees(list) {
    let employees_objegts = {};
    const employees_list = [];

    for (const attrib of list) {
        employees_objegts['name'] = attrib.innerText;
        employees_objegts['position'] = attrib.getAttribute('data-position');
        employees_objegts['salary'] = attrib.getAttribute('data-salary');
        employees_objegts['age'] = attrib.getAttribute('data-age');
        employees_list.push(employees_objegts);
        employees_objegts = {};
    }

    return employees_list;
}

sortList(list);
getEmployees(list);

// console.log(list)
// console.log(list[0])
// console.log(list[0].getAttribute('data-salary'))
// console.log(sortList(list))
// console.log(list[0])
// console.log(list[0].getAttribute('data-salary'))
// console.log(getEmployees(list))
