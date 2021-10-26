function reverseArray(numbers) {
    if(!Array.isArray(numbers)) {
        return null;
    }
    const newMas = numbers.slice();
    newMas.reverse();
    return newMas;
}