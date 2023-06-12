import { handleSubmit } from '../src/client/js/formHandler'
test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

describe('Testing the submit functionality', () => {
  test('Testing the handleSubmit() function', () => {
    expect(handleSubmit).toBeDefined()
  })
})
