const {soma} = require('./index');

test('Should adds two numbers, 1 plus 2 equal 3', () => {
  expect(soma(1, 2)).toBe(3);
});