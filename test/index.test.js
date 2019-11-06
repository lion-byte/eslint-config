const config = require('../index')

describe('ESLint configuration', () => {
  test('should exist', () => {
    expect(config).toMatchSnapshot()
  })
})
