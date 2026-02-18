// @ts-check
import { describe, test } from 'node:test'

import config from '../index.js'

describe('ESLint configuration', () => {
  test('should exist', (t) => {
    t.assert.snapshot(config)
  })
})
