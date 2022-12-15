'use strict';

function sortList(ul) {
  const newUl = ul.cloneNode(false);

  const lis = parseEmployees(ul);

  lis.sort(function(a, b) {
    return convertSalary(b) - convertSalary(a);
  });

  for (let i = 0; i < lis.length; i++) {
    newUl.append(lis[i]);
  }

  ul.replaceWith(newUl);
}

function convertSalary(x) {
  return parseFloat(x.dataset.salary.replace(/\$|,/g, ''));
}

function parseEmployees(list) {
  const res = [];

  for (let i = list.childNodes.length; i >= 0; i--) {
    if (list.childNodes[i] && list.childNodes[i].nodeType === 1) {
      res.push(list.childNodes[i]);
    }
  }

  return res;
}

function getEmployees(ul) {
  const employeesNodes = parseEmployees(ul);
  const res = [];

  for (let i = 0; i < employeesNodes.length; i++) {
    const employee = {
      name: employeesNodes[i].innerText,
      position: employeesNodes[i].dataset.position,
      salary: convertSalary(employeesNodes[i]),
      age: parseFloat(employeesNodes[i].dataset.age),
    };

    res.push(employee);
  }

  return res;
}

sortList(document.querySelector('ul'));

getEmployees(document.querySelector('ul'));
