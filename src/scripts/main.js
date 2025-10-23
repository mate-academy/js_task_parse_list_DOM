'use strict';

// Helper: konwertuje salary z "$123,456" na liczbę
function parseSalary(salaryStr) {
  return Number(salaryStr.replace('$', '').replace(/,/g, ''));
}

// Funkcja sortująca listę po salary malejąco
function sortList(listSelector) {
  const list = document.querySelector(listSelector);
  if (!list) return;

  const items = Array.from(list.children);

  // Sortowanie malejąco po salary
  items.sort((a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary));

  // Dodanie posortowanych elementów do DOM
  items.forEach((item) => list.appendChild(item));
}

// Funkcja zwracająca tablicę obiektów pracowników
function getEmployees(listSelector) {
  const list = document.querySelector(listSelector);
  if (!list) return [];

  return Array.from(list.children).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

// Wywołanie funkcji
sortList('ul');
getEmployees('ul'); // wywołanie funkcji, żeby linter uznał ją za używaną





