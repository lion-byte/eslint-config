// @ts-check
import { describe, test } from 'node:test'
import assert from 'node:assert'
import config from '../index.js'

describe('ESLint configuration', () => {
  test('should exist', (t) => {
    const rules = config
      .filter((c) => c.name === '@lion-byte/eslint-config')
      .map((c) => c.rules ?? {})
    assert.ok(rules.length > 0)
    t.assert.snapshot(rules)
  })
})
