// 参数列表
// 参数一：用例的名称
// 参数二：用例的逻辑
test('common matcher', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)
})

test('to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('number', () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

test('object', ()  => {
  expect({name: 'ship'}).toEqual({name: 'ship'})
})
