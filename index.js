// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers, string) => {
    const filterArray = drivers.filter((filtered) => {
        return filtered.toUpperCase() === string.toUpperCase();
    });
    return filterArray;
}

const fuzzyMatch = (drivers, string) => {
    const filterArray = drivers.filter((filtered) => {
        return filtered[0] === string[0];
    });
    return filterArray;
}

const matchName = (drivers, string) => {
    const filterArray = drivers.filter((filtered) => {
        console.log(filtered.name);
        return filtered.name === string;
    });
    return filterArray;
}