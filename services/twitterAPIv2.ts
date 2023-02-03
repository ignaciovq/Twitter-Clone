import { JWT } from 'next-auth/jwt'
import { parseTweets } from '../utils/tweets'

const baseUrl = 'https://api.twitter.com'
const tweetFields = 'tweet.fields=attachments,author_id,created_at,public_metrics&expansions=author_id,attachments.media_keys&user.fields=username,name,profile_image_url,verified,verified_type&media.fields=preview_image_url,url,width,height,alt_text&max_results=10'

export const getCurrentUserTimeline = async ({ token, paginationToken = '' }:{token:JWT, paginationToken?:string}) => {
  const { sub, accessToken } = token
  const headers = { Authorization: `Bearer ${accessToken}` }
  if (paginationToken) paginationToken = `&pagination_token=${paginationToken}`
  const url = `${baseUrl}/2/users/${sub}/timelines/reverse_chronological?${tweetFields}${paginationToken}`

  const res = await fetch(url, { method: 'GET', headers })
  const data = await res.json()

  if (!res.ok) throw new Error(`Error fetching data from API: ${data.detail}`)

  return parseTweets(data)
}
