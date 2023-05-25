const apiKey = 'e252c7b979260bc626024454b282e9a2 '
const generateBtn = document.getElementById('generate')

generateBtn.addEventListener('click', integrationAPI)

const getWeatherData = async () => {
  const txt = document.getElementById('url-input').value
const baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=auto&url=${txt}`

  const res = await fetch(baseURL)
  console.log(res);
  try {
    const data = await res.json()
    console.log(data);
    return data
  } catch (error) {
    alert('There seems to be some error:', error)
  }
}

function integrationAPI (e) {
  e.preventDefault()
  getWeatherData()
    .then(data => {
      console.log(data);
      postData('/addDatatoServer', {
        polarity: data.polarity,
        agreement: data.agreement,
        subjectivity: data.subjectivity,
        confidence:  data.confidence,
     irony: data.irony
      }
      )
    })
    .then(() => {
      console.log('heeeree');
      showData()
    })
    .catch(error => {
      console.log( error)
    })
}

const postData = async (url = '', data = {}) => {
  console.log(url);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      polarity: data.polarity,
      agreement: data.agreement,
      subjectivity: data.subjectivity,
      confidence: data.confidence,
      irony: data.irony
    })
  })
  try {
    const postedData = await response.json()
    console.log(postedData);
    return postedData
  } catch (error) {
  console.log(error)
  }
}

const showData = async () => {
  const request = await fetch('/all')
  try {
    const allData = await request.json()
    console.log(allData);
    {
      document.getElementById('polarity').innerHTML = allData.polarity
      document.getElementById('agreement').innerHTML = allData.agreement
      document.getElementById('subjectivity').innerHTML = allData.subjectivity
      document.getElementById('confidence').innerHTML = allData.confidence
      document.getElementById('irony').innerHTML = allData.irony
    }
  } catch (error) {
    console.log(error)
  }
}
