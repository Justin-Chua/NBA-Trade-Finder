import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const fetchTeams = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/teams`)
    return response.data
  } catch (error) {
    console.error('Error fetching teams:', error)
    throw error
  }
}

export const fetchPlayers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/players`)
    return response.data
  } catch (error) {
    console.error('Error fetching players:', error)
    throw error
  }
}
