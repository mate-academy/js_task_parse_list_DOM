const mainList = document.querySelector('ul');

// Функція для перетворення зарплати у число
const parseSalary = (salary) => parseInt(salary.replace(/[$,]/g, ''), 10);

// Функція для сортування списку за зарплатою
const sortList = (listElement) => {
  const items = Array.from(listElement.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA; // Сортування у порядку спадання
  });

  // Додаємо відсортовані елементи назад до списку
  listElement.innerHTML = '';
  listElement.append(...items);
};

// Функція для створення масиву об'єктів
const getEmployees = (listElement) => {
  return Array.from(listElement.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age, 10),
  }));
};

// Викликати функції
sortList(mainList);
getEmployees(mainList);
