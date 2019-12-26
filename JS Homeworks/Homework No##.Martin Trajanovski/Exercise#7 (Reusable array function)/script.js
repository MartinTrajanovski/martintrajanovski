let arr = [false, NaN, "", undefined, null, "Martin", 56, 345, 89, "Mila"];
function filterArray (array) {
    let purifiedArr = [];
    for (element of array) {
        if(element !== false || element !== NaN || element !== "", element || undefined && element || null) {
            purifiedArr.push(element);
        }
    }
    return purifiedArr;
}
console.log(filterArray(arr));