'use strict';

/**
 * Функція №2: Створює масив об'єктів працівників з HTML-списку.
 * @returns {Array<object>} Масив об'єктів працівників або порожній масив.
 */
function getEmployeesArray() {
  const employeeListItems = document.querySelectorAll('ul > li');
  const employeesArray = [];

  employeeListItems.forEach((liElement) => {
    const employeeName = liElement.textContent.trim();
    const position = liElement.dataset.position;
    const ageString = liElement.dataset.age;
    const salaryString = liElement.dataset.salary;
    const cleanedSalaryString = salaryString
      .replace('$', '')
      .replaceAll(',', '');
    const age = Number(ageString);
    const salary = Number(cleanedSalaryString);

    if (isNaN(age) || isNaN(salary)) {
      // Пропускаємо цей елемент, якщо дані невірні (без console.error)
      return;
    }

    const employee = {
      name: employeeName,
      position,
      salary,
      age,
    };

    employeesArray.push(employee);
  });

  return employeesArray; // Повертаємо результат
}

/**
 * Функція №1: Сортує HTML-список працівників на сторінці
 * за зарплатою (за спаданням).
 */
function sortListBySalary() {
  const listItems = document.querySelectorAll('ul > li');

  if (listItems.length === 0) {
    return;
  }

  const listItemsArray = [...listItems];

  listItemsArray.sort((a, b) => {
    const salaryStringA = a.dataset.salary;
    const cleanedStringA = salaryStringA.replace('$', '').replaceAll(',', '');
    const salaryA = Number(cleanedStringA);

    const salaryStringB = b.dataset.salary;
    const cleanedStringB = salaryStringB.replace('$', '').replaceAll(',', '');
    const salaryB = Number(cleanedStringB);

    if (isNaN(salaryA) || isNaN(salaryB)) {
      return 0;
    }

    return salaryB - salaryA; // Сортування за спаданням
  });

  const listContainer = listItems[0].parentNode;

  if (listContainer) {
    listItemsArray.forEach((liElement) => {
      listContainer.appendChild(liElement);
    });
  }
  // Немає console.error, якщо контейнер не знайдено
}

// --- ВИКЛИК ФУНКЦІЙ ---
// Тепер функції викликаються, щоб ESLint не скаржився на 'no-unused-vars'
// Цей виклик візуально відсортує список на сторінці
sortListBySalary();

// Цей виклик виконає функцію отримання масиву даних.
// Результат можна зберегти у змінну, якщо він потрібен далі.
getEmployeesArray();

// Якщо тобі потрібно десь використати сам масив, зроби так:
// const employeeData = getEmployeesArray();
// console.log(employeeData); // Наприклад, вивести в консоль для перевірки
