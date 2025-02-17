'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const employeeItems = document.querySelectorAll('ul > li');

  employeeItems.forEach(employee => {
    const name = employee.textContent.trim();
    const position = employee.getAttribute('data-position');
    const salary = employee.getAttribute('data-salary');
    const age = employee.getAttribute('data-age');

    console.log(`Name: ${name}, Position: ${position}, Salary: ${salary}, Age: ${age}`);
  });

  const sortList = (list, attribute, desc = false) => {
    return [...list].sort((a, b) => {
      const val1 = a.getAttribute(attribute);
      const val2 = b.getAttribute(attribute);
      let comparison = 0;

      if (val1 > val2) {
        comparison = 1;
      } else if (val1 < val2) {
        comparison = -1;
      }

      return desc ? -comparison : comparison;
    });
  };

  const getEmployees = () => {
    return [...employeeItems].map(item => ({
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: parseFloat(item.getAttribute('data-salary').replace(/[$,]/g, '')),
      age: parseInt(item.getAttribute('data-age'), 10),
    }));
  };

  const employeeList = getEmployees();
  console.log(employeeList);

  const sortedBySalary = sortList(employeeItems, 'data-salary', true);
  console.log("Sorted by salary (desc):", sortedBySalary);
});
