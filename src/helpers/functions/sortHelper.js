export const sortList = (data, param) => {
  return data.sort((a, b) => b[param] - a[param]);
};
