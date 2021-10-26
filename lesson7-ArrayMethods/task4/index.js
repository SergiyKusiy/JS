'use strict';

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
    allStudentsList
        .filter(name => !studentsForRetake.includes(name))
        .map(name => `Good job, ${name}`);

/*-----------------------Tests----------------------------*/
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

getMessagesForBestStudents(allStud, retakeStud);

