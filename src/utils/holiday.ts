import axios from 'axios'
import config from 'config'
import logger from './logger'

const holiday = async () => {
  try {
    const apiKey = config.get<string>('holiday.key')
    const country = config.get<string>('holiday.country')
    const currentYear = config.get<string>('holiday.year')
    const response:any = await axios.get(
      `https://holidayapi.com/v1/holidays?pretty&key=${apiKey}&country=${country}&year=${currentYear}`
    )
   
    return response.holiday;
  } catch (error:any) {
    logger.info(`Error in Holiday Api : ${error.message}`)
  }
}

export default holiday
