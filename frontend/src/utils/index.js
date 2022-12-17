export const getUniqueResults = (arr) => {
    const newArr = arr.filter((v, i, a) => a.indexOf(v) === i);
    return newArr;
}


export const capitalizeFirstLetter = (string) =>  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
