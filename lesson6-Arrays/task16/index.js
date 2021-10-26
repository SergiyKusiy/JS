function removeDuplicates(array) {
    if(!Array.isArray(array)) {
        return null;
    }
    let newMas = [...new Set(array)];
    return newMas;
}