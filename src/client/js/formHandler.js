import { checkForName } from './checkForName'

const generateBtn = document.getElementById('generate')
if (generateBtn) {
  generateBtn.addEventListener('click', handleSubmit)
}

function handleSubmit (e) {
  let formText = document.getElementById('url-input').value

  e.preventDefault()

  if (checkForName(formText)) {
    postData('http://localhost:3000/api', { url: formText }).then(res => {
      dataToShow(res)
    })
  } else {
    alert('Please use URL with HTTP or HTTPS')
  }
}
const dataToShow = res => {
  document.getElementById('polarity').innerHTML = ` ${res.score_tag}`
  document.getElementById('agreement').innerHTML = `${res.agreement}`
  document.getElementById('subjectivity').innerHTML = `${res.subjectivity}`
  document.getElementById('confidence').innerHTML = `${res.confidence}`
  document.getElementById('irony').innerHTML = `${res.irony}`
  document.getElementById('text').innerHTML = `${
    res.sentence_list[0] === undefined
      ? 'not available'
      : res.sentence_list[0].text
  }`
}
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  try {
    const dataFromJson = await response.json()
    if (dataFromJson.status.code === '212') {
      alert(dataFromJson.status.msg)
    }
    return dataFromJson
  } catch (error) {
    console.log('error', error)
  }
}

export { handleSubmit }
