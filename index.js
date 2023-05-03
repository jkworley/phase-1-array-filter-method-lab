// Code your solution here

function findMatching(collection, str) {
    let driver = collection.filter(element => element.toLowerCase() === str.toLowerCase());
    return driver;
}

function fuzzyMatch(collection, str) {
    let driver = collection.filter(element => element.charAt(0) === str.charAt(0));
    return driver;
}

function matchName(collection, str) {
    let driver = collection.filter(element => element.name === str);
    return driver;
}