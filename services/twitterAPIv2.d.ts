import type { TwitterProfile } from 'next-auth/providers/twitter'
import type { JWT } from "next-auth/jwt";

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
    variants?: {
        bitrate?: number,
        content_type: string,
        url: string
    }[],
    duration_ms?: number
}

export type UserProfile = Required<Omit<TwitterProfile['data'], 'location' | 'url' | 'entities'> & { verified_type: string }>

export type TweetAuthor = Omit<UserProfile, 'description' | 'protected' | 'created_at' | 'url' | 'pinned_tweet_id'>

export type PaginationData = {
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

interface authenticatedEndpointParams {
    token: JWT
}

interface TimelineEndpointParams extends authenticatedEndpointParams {
    endpoint: 'timeline',
    additionalParams: {
        userId: string,
        paginationToken?: string
    }
}

interface UsersEndpointParams extends authenticatedEndpointParams {
    endpoint: 'users',
    additionalParams: {
        username: string
    }
}

interface SearchEndpointParams {
    endpoint: 'search',
    token?: JWT,
    additionalParams: {
        query: string
    }
}

export type fetchAPIParams = TimelineEndpointParams | UsersEndpointParams | SearchEndpointParams