const sum = (a, b) => a + b;

test('sum', () => {
  expect(sum(3, 4)).toBe(7);
  expect(sum(3, 9)).toBe(12);
});
