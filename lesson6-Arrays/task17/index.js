function uniqueCount(num) {
    if(!Array.isArray(num)) {
        return null;
    }
    return new Set(num).size;
}