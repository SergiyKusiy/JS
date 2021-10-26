'use strict';

const reverseArray = num =>
    Array.isArray(num) ? num.flat().reverse() : null;