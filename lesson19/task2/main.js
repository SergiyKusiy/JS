export const getOwnProps = obj => {
  const array = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      array.push(prop);
    }
  }

  return array;
};
