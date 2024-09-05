// Helper function to convert salary to a number
function getSalary(element) {
  // Remove dollar sign and commas, then convert to number
  return Number(element.dataset.salary.replace(/[^0-9.-]+/g, ''));
}

// Function to sort the list by salary in descending order
function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort((a, b) => {
    return getSalary(b) - getSalary(a); // Descending order
  });

  // Append sorted items back to the list
  itemsArray.forEach((item) => list.appendChild(item));
}

// Function to return an array of employee objects
function getEmployees(list) {
  // eslint-disable-next-line no-shadow
  const employees = [];

  Array.from(list.children).forEach((item) => {
    const employee = {
      name: item.textContent.trim(), // Get the text content and trim whitespace
      position: item.dataset.position,
      salary: getSalary(item),
      age: Number(item.dataset.age), // Convert age to number
    };

    employees.push(employee);
  });

  return employees;
}

// Assume your list is the first <ul> element in the document
const employeeList = document.querySelector('ul');

// Sort the list by salary
sortList(employeeList);

// Get the array of employee objects
const employees = getEmployees(employeeList);

// eslint-disable-next-line no-console
console.log(employees);
