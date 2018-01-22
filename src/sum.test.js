const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('2 + 2 to equal 4', () => {
  expect(2 + 2).toBe(4)
})

test('Object assignment', () => {
  const data = {
    one: 1,
  }

  data.two = 2

  expect(data).toEqual({ one: 1, two: 2 })
})

test('a + b not equal to 0', () => {
  for (let a = 1; a < 10; a += 1) {
    for (let b = 1; b < 10; b += 1) {
      expect(a + b).not.toBe(0)
    }
  }
})

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  // 4 is Equal to 4.5
  // Use toBeCloseTo with floating values
  expect(value).toBeLessThanOrEqual(4.5)
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('there is a "stop" in Christop', () => {
  expect('Christoph').toMatch(/stop/)
})

const shoppingList = [
  'Diaper',
  'Kleenex',
  'Trash bags',
  'Paper towels',
  'beer',
]

// use test.only(... 
// to run just this test
test('should contain beer', () => {
  expect(shoppingList).toContain('beer')
})

describe('C--calculator', () => {
  test('test 1', () => {
    expect(true).toEqual(true)
  })
  test('test 2', () => {
    expect(true).toEqual(true)
  })
  test('test 3', () => {
    expect(true).toEqual(true)
  })
})

const diff = require('jest-diff')

const a = {
  a: {
    b: {
      c: 5,
    },
  },
}

const b = {
  a: {
    b: {
      c: 6,
    },
  },
}

const result = diff(a, b)

console.log(result)
