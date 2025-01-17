'use strict';

const list = document.querySelector('ul');

if (!list) {
  // eslint-disable-next-line no-console
  console.log('List element not found');
} else {
  const parseSalary = (salary) => parseFloat(salary.replace(/[$,]/g, ''));

  const sortList = (listElem) => {
    const items = Array.from(list.children);

    items.sort((a, b) => {
      const salaryA = parseSalary(a.dataset.salary);
      const salaryB = parseSalary(b.dataset.salary);

      return salaryB - salaryA;
    });

    items.forEach((item) => list.appendChild(item));
  };

  const getEmployees = (listElement) => {
    return Array.from(listElement.children).map((item) => ({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    }));
  };

  const employes = getEmployees(list);

  // Викликаємо функцію сортування
  sortList(list);
  // eslint-disable-next-line no-console
  console.log(employes);
}
