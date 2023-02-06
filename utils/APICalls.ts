import { setAuthorizationHeader } from './session'
import { Tab } from './trends'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives/fetch'

export async function getTimeline (userId: string) {
  const baseURL = process.env.HOST
  try {
    const { headers } = setAuthorizationHeader()
    const res = await fetch(`${baseURL}/api/timeline/${userId}`, {
      method: 'GET',
      headers,
      next: { revalidate: 15 }
    })
    return await res.json()
  } catch (err) {
    const { message } = err as Error
    return { timeline: undefined, pagination: undefined, err: message }
  }
}

export async function getUser (username: string) {
  const baseURL = process.env.HOST
  try {
    const { headers } = setAuthorizationHeader()
    const res = await fetch(`${baseURL}/api/users/${username}`, {
      method: 'GET',
      headers,
      next: { revalidate: 3600 }
    })
    return await res.json()
  } catch (err) {
    const { message } = err as Error
    return { user: undefined, err: message }
  }
}

export async function getTrends (tab: Tab) {
  const baseURL = process.env.HOST
  try {
    const res = await fetch(`${baseURL}/api/trends/${tab}`, {
      method: 'GET',
      next: { revalidate: 3600 }
    })
    return await res.json()
  } catch (err) {
    const { message } = err as Error
    console.error(err)
    return { results: undefined, err: message }
  }
}

export async function searchTweets (query: string) {
  const baseURL = process.env.HOST
  try {
    if (query.match(/\s/)) { query = `"${query}"` }
    const res = await fetch(`${baseURL}/api/search/${query}`, {
      method: 'GET',
      next: { revalidate: 5 }
    })
    return await res.json()
  } catch (err) {
    const { message } = err as Error
    return { search: undefined, err: message }
  }
}
