// Select the list of employees
const employeeList = document.querySelector('#employees');

// Helper function: convert salary string to number
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/,/g, '').trim());
}

// Function to sort the list by salary (descending)
function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary));

  // Re-append sorted items to the list
  items.forEach(item => list.appendChild(item));
}

// Function to get an array of employee objects
function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map(item => {
    // Extract name and position from text content
    const [name, position] = item.textContent.split(' - ').map(str => str.trim());

    return {
      name: name,
      position: position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

// Call the functions
sortList(employeeList);
const employeesArray = getEmployees(employeeList);
