import unsplashAPI from './unsplashAPI'
import address from './address.json'
import axios from 'axios'

export default async function getData() {
  const photos = await unsplashAPI.search.photos('home', 1, 30).then(res => res.json())
  const { data: mockData } = await axios.get(
    'https://api.mockaroo.com/api/db864930?count=1000&key=4cece7d0'
  )

  return photos.results.map((photo, idx) => {
    return {
      urls: {
        regular: photo.urls.regular
      },
      ...address.data[idx],
      ...mockData[idx]
    }
  })
}
