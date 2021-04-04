test('adds 1 + 2 to equal 3', () => {
  const one: number = 1;
  const two: string = '2';

  expect(one + Number(two)).toBe(3);
});
