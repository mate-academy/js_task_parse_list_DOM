'use strict';

(function (globalT) {
  const LIST_SELECTOR = 'ul';
  const employeeList = document.querySelector(LIST_SELECTOR);

  function parseSalary(salaryStr) {
    if (typeof salaryStr !== 'string') {
      return 0;
    }

    const n = Number(salaryStr.replace(/[^0-9.-]+/g, ''));

    return Number.isFinite(n) ? n : 0;
  }

  function sortList(list) {
    if (!list) {
      return;
    }

    const items = Array.from(list.querySelectorAll('li'));

    items.sort((a, b) => {
      const aVal = parseSalary(a?.dataset?.salary);
      const bVal = parseSalary(b?.dataset?.salary);

      return bVal - aVal;
    });

    items.forEach((item) => list.appendChild(item));
  }

  function getEmployees(list) {
    if (!list) {
      return [];
    }

    const items = Array.from(list.querySelectorAll('li'));

    return items.map((item) => ({
      name: item.textContent.trim(),
      position: item.dataset?.position ?? '',
      salary: parseSalary(item.dataset?.salary),
      age: Number(item.dataset?.age ?? 0),
    }));
  }

  if (employeeList) {
    sortList(employeeList);
  }

  const employees = getEmployees(employeeList);

  if (typeof window !== 'undefined') {
    global.sortList = sortList;
    global.getEmployees = getEmployees;
    global.employees = employees;
    global.parseSalary = parseSalary;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      sortList,
      getEmployees,
      employees,
      parseSalary,
    };
  }
})(
  typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
      ? global
      : {},
);
