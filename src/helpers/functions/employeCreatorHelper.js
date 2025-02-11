export const getEmployees = (data) => {
  const val = data.filter((employe) => employe.dataset !== undefined);
  return val.map((employe) => {
    if (employe.dataset !== undefined) {
      return {
        name: employe.textContent.trim(),
        position: employe.dataset.position,
        salary: parseInt(employe.dataset.salary.replace(/[$,]/g, ""), 10),
        age: +employe.dataset.age,
      };
    }
  });
};
