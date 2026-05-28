'use strict';

// 1. Находим и получаем список из документа
const employeesList = document.querySelector('ul');

// Вспомогательная функция для очистки строки зарплаты и превращения её в число
const parseSalary = (salaryStr) => {
  if (!salaryStr) {
    return 0;
  }

  // Удаляем знак $ и все запятые, затем переводим в число
  const cleanStr = salaryStr.replace(/[$,]/g, '');

  return parseFloat(cleanStr) || 0;
};

// 2. Функция сортировки списка по зарплате (убывание)
function sortList(list) {
  if (!list) {
    return;
  }

  // Получаем массив элементов li
  const items = Array.from(list.children);

  // Сортируем
  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA; // от большей к меньшей
  });

  // Обновляем элементы в DOM
  list.innerHTML = '';
  items.forEach((item) => list.appendChild(item));
}

// 3. Функция, возвращающая массив объектов сотрудников согласно схеме
function getEmployees(list) {
  if (!list) {
    return [];
  }

  const items = Array.from(list.children);

  return items.map((item) => {
    return {
      name: item.textContent.trim(), // Имя берем из текстового содержимого li
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary), // Числовое значение
      age: parseInt(item.dataset.age, 10) || 0, // Числовое значение
    };
  });
}

// 4. Вызов функций
sortList(employeesList);
getEmployees(employeesList);
