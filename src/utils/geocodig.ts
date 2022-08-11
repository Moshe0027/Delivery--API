import axios from 'axios'
import config from 'config'
import logger from './logger'

const geocodig = async (address: string) => {
  try {
    const apiKey = config.get<string>('geolocation')
    const response = await axios.get(
      `https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=${apiKey}`
    )
    if (response?.status === 200) {
      return response.data.features[0].properties;
    }
    return false;
  } catch (error: any) {
    logger.info(`Error in Geoapify Api : ${error.message}`)
  }
}

export default geocodig;
