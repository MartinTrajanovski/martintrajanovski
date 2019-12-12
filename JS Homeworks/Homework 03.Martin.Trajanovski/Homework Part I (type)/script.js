function typeChecker (type) {
    return typeof type;
}
console.log(typeChecker(null));
console.log(typeChecker(5 > 2));
console.log(typeChecker(5));
console.log(typeChecker("Martin"));
console.log(typeChecker(undefined));