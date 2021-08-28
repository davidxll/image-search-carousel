import placeholder from '../placeholder.jpg'
import axios from 'axios'
import env from '../env.json'

const PROXY_URL = 'https://cors-anywhere.herokuapp.com'

const getEndpointUrl = text => `${PROXY_URL}/https://serpapi.com/search.json?engine=google&q=${text}&location=United+States&google_domain=google.com&gl=us&hl=en&ijn=0&tbm=isch&api_key=${env.API_KEY}`

const formatImage = ({original, title}) => {
  return  {
    url: original,
    title: title
  }
}

const getImages = async (text) => {
  if (!text) {
    return Array(10).fill({ url: placeholder, title: 'placeholder' })
  }
  const res = await axios.get(getEndpointUrl(text))
  return res.data.images_results.map(formatImage)
}

export { getImages }