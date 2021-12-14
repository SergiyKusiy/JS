// eslint-disable-next-line no-undef

const add3 = value => value + 3;
const mult2 = value => value * 2;
const div4 = value => value / 4;

// eslint-disable-next-line no-use-before-define
const doEverything = compose(add3, mult2, div4);

const compose =
  (...funcs) =>
  value => {
    return funcs.reduce((acc, funcs) => funcs(acc), value);
  };
console.log(doEverything(3));
