'use strict';

const pickProps = (obj, props) => {
	let newObj = {};

	props.forEach((element) => {
		if (obj.hasOwnProperty(element)) {
			newObj[element] = obj[element];
		}
	});
	return newObj;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']))
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }