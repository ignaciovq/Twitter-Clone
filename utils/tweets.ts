/* eslint-disable camelcase */
import type { TweetResponse, TweetAuthor, TweetData } from '../services/twitterAPIv2.d'

export const parseTweets = (response: TweetResponse) => {
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
