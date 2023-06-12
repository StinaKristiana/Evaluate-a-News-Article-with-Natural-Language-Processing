import {checkForName} from '../src/client/js/checkForName'

describe('checkForName', () => {
  test('should return true for a valid URL starting with http', () => {
    const validUrl = 'http://www.example.com'
    const result = checkForName(validUrl)
    expect(result).toBe(true)
  })

  test('should return true for a valid URL starting with https', () => {
    const validUrl = 'https://www.example.com'
    const result = checkForName(validUrl)
    expect(result).toBe(true)
  })

  test('should return false for an invalid URL', () => {
    const invalidUrl = 'example.com'
    const result = checkForName(invalidUrl)
    expect(result).toBe(false)
  })
})
