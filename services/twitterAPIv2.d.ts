import type { TwitterProfile } from 'next-auth/providers/twitter'

interface BaseTweetObject {
    id: string,
    text: string,
    edit_history_tweet_ids: string[],
}

export interface PublicMetrics {
    retweet_count: number,
    reply_count: number,
    like_count: number,
    quote_count: number,
    impression_count: number,
}

export interface TweetObject extends BaseTweetObject {
    created_at: string,
    public_metrics: PublicMetrics,
    author_id: string,
    attachments?: {
        media_keys: string[],
    }
}

interface BaseMediaObject {
    media_key: string,
    type: string
}

export interface MediaExpansionObject extends BaseMediaObject {
    url: string,
    preview_image_url?: string,
    width: number,
    height: number,
    alt_text?: string,
}

export type UserProfile = Required<Omit<TwitterProfile['data'], 'location' | 'entities'> & { verified_type: string }>

export type TweetAuthor = Omit<UserProfile, 'description' | 'protected' | 'created_at' | 'url' | 'pinned_tweet_id'>

type PaginationData = {
    newest_id: string,
    oldest_id: string,
    result_count: number,
    next_token: string,
    previous_token?: string
}

export interface TweetResponse {
    data: TweetObject[],
    includes: {
        users: TweetAuthor[],
        media?: MediaExpansionObject[],
    },
    meta: PaginationData
}

export interface TweetData extends BaseTweetObject {
    created_at: string,
    public_metrics: PublicMetrics,
    author: TweetAuthor,
    media?: MediaExpansionObject[]
}
