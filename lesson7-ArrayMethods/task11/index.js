'use strict';

const arrOfNames = [
  'John',
  'Olivya',
  'Oleksandr',
  'Emanuel',
  'Vanya',
  'Nastya',
];

const filterNames = (arr, text) => 
    arr.filter((elem) => elem.includes(text) && elem.length > 5);


console.log(filterNames(arrOfNames, 'ya'));