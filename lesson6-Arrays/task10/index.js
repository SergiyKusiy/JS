function cloneArr(arr) {
    if(!Array.isArray(arr)) {
        return null;
    }
    const newMas = arr.slice();;
    return newMas;
}