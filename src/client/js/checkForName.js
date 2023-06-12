function checkForName (formText) {
  let regexp = /^(http|https):\/\/[^ "]+$/
  return regexp.test(formText)
}

export { checkForName }
