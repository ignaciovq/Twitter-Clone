import { parseTweets } from '../utils/tweetHandling'
import { fetchAPIParams } from './twitterAPIv2.d'

const baseUrl = 'https://api.twitter.com'
const tweetFields = 'tweet.fields=attachments,author_id,created_at,public_metrics&expansions=author_id,attachments.media_keys&user.fields=username,name,profile_image_url,verified,verified_type&media.fields=preview_image_url,url,width,height,alt_text,variants,duration_ms&max_results=30'
const userFields = 'user.fields=profile_image_url,verified,verified_type,description,created_at&expansions=pinned_tweet_id&tweet.fields=attachments,created_at,public_metrics'

export const fetchAPI = async ({ endpoint, token = {}, additionalParams }:fetchAPIParams) => {
  const { sub, accessToken } = token
  let fetchToken = accessToken
  let url = ''

  if (endpoint === 'timeline') {
    const apiRoute = additionalParams?.userId === sub ? 'timelines/reverse_chronological' : 'tweets'
    url = `${baseUrl}/2/users/${additionalParams.userId}/${apiRoute}?${tweetFields}${additionalParams?.paginationToken || ''}`
  } else if (endpoint === 'users') {
    url = `${baseUrl}/2/users/by?usernames=${additionalParams?.username}&${userFields}`
  } else {
    url = `${baseUrl}/2/tweets/search/recent?query=${additionalParams?.query}&${tweetFields}`
    fetchToken = process.env.TWITTER_BEARER_TOKEN
  }
  const headers = { Authorization: `Bearer ${fetchToken}` }
  const res = await fetch(url, { method: 'GET', headers })
  let data = await res.json()
  if (!res.ok) throw new Error(`Error fetching data from API: ${data.detail}`)

  if (endpoint !== 'users') data = parseTweets(data)

  return data
}
