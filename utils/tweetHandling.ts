/* eslint-disable camelcase */
import type { TweetResponse, TweetAuthor, TweetData, PaginationData } from '../services/twitterAPIv2.d'

export const parseTweets = (response: TweetResponse):[TweetData[], PaginationData] => {
  const { data, includes, meta } = response
  const { users, media } = includes
  const tweets: TweetData[] = data.map((tweet) => {
    const { author_id, attachments, ...rest } = tweet
    const author = users.find((user) => user.id === author_id) as TweetAuthor
    const mediaKeys = attachments?.media_keys
    const tweetMedia = media?.filter((media) => mediaKeys?.includes(media.media_key))
    return {
      ...rest,
      author,
      media: tweetMedia
    }
  })
  return [tweets, meta]
}

export const setVerifiedIcon = (verifiedType: string) => {
  switch (verifiedType) {
    case 'business':
      return '/icons/tweets/official.svg'
    case 'government':
      return '/icons/tweets/government.svg'
    default:
      return '/icons/tweets/verified.svg'
  }
}

export const parseTweetDate = (created_at: string) => {
  const creationDay = new Date(created_at).getDay()
  const today = new Date().getDay()
  // if tweet was created more than a day ago, return date
  if (creationDay !== today) {
    return new Date(created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }).toLowerCase()
  }
  // if tweet was created less than a minute ago, return seconds elapsed from its creation
  if (Date.now() - new Date(created_at).getTime() < 60000) {
    return `${Math.floor((Date.now() - new Date(created_at).getTime()) / 1000)}s`
  }
  // if tweet was created less than an hour ago, return minutes
  if (Date.now() - new Date(created_at).getTime() < 3600000) {
    return `${Math.floor((Date.now() - new Date(created_at).getTime()) / 60000)}m`
  }
  // if tweet was created today, return hours
  return `${Math.floor((Date.now() - new Date(created_at).getTime()) / 3600000)}h`
}
