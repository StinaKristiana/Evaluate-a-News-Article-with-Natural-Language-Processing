function checkForName (inputText) {
let regexp = /^(http|https):\/\/[^ "]+$/
return regexp.test(inputText)

}

export { checkForName }
