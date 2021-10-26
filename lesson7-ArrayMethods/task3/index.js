'use strict';

const flatArray = arr => 
    arr
        .flat()
        .slice()
        .sort((a, b) => a - b);
