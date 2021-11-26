function bar() {
  let foo = 1;
  if (!foo) {
    foo = 10;
  }

  return foo;
}

// eslint-disable-next-line import/no-mutable-exports
const foo = bar();
export default foo;
