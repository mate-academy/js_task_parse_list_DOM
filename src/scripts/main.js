'use strict';

(function (root) {
  const LIST_SELECTOR = 'ul';
  const employeeList =
    typeof document !== 'undefined'
      ? document.querySelector(LIST_SELECTOR)
      : null;

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

    items.sort(
      (a, b) =>
        parseSalary(b?.dataset?.salary) - parseSalary(a?.dataset?.salary),
    );
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

  let employees = [];

  if (employeeList) {
    sortList(employeeList);
    employees = getEmployees(employeeList);
  }

  root.sortList = sortList;
  root.getEmployees = getEmployees;
  root.employees = employees;
  root.parseSalary = parseSalary;

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
