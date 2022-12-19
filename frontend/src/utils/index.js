export const getUniqueResults = (arr) => {
  const newArr = arr.filter((v, i, a) => a.indexOf(v) === i);
  return newArr;
};

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? data : "";
};

export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};
