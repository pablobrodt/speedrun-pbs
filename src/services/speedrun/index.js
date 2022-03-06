import { http } from '../http'
import { personalBestFactory } from '../../factories'

async function getPersonalBests(userId) {
  const endpoint = `users/${userId}/personal-bests?embed=category,game`

  const { data: { data: personalBests } } = await http.get(endpoint)

  return personalBests.map(personalBestFactory)
}

export const speedrunService = {
  getPersonalBests,
}
