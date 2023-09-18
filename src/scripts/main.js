'use strict';

// write code here
const convertToNumber = function(letters) {
  let correctSalary = '';

  for (const letter of letters) {
    if (letter !== '$' && letter !== ',') {
      correctSalary += letter;
    }
  }

  return +correctSalary;
};

const convertToString = function(symbols) {
  let dataSalary = '$';

  for (const symbol of symbols) {
    dataSalary += symbol;

    if (dataSalary.length === 4) {
      dataSalary += ',';
    }
  }

  return dataSalary;
};

const list = document.querySelectorAll('li');

const sortList = function(argument) {
  const newList = [...argument].sort((person1, person2) => {
    person1.dataset.salary = convertToNumber(person1.dataset.salary);
    person2.dataset.salary = convertToNumber(person2.dataset.salary);

    return person2.dataset.salary - person1.dataset.salary;
  });

  return newList;
};

const correctList = document.querySelector('ul');

correctList.innerHTML = `
  ${sortList(list).map(text => `
     <li>${text.textContent}</li>
  `).join('')}
`;

const getEmployees = function(personList) {
  const correctArr = sortList(personList).reduce((prev, user) => {
    const userObject = {
      name: user.textContent.trim(),
      position: user.dataset.position,
      salary: convertToString(user.dataset.salary),
      age: user.dataset.age,
    };

    prev.push(userObject);

    return prev;
  },
  []);

  return correctArr;
};

sortList(list);
getEmployees(list);
