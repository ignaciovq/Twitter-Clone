# Twitter Clone App

A Twitter site clone created using Next 13. 

## Features

* Authentication through Next-Auth (Twitter Provider).
* Tweets, trends and profiles visualization through React components.
* Twitter API 2.0 for searching tweets, showing user profile information and getting tweet timelines.
* Next 13 Image component and shard to display images and optimize their loading process.
* HTML video tag for displaying tweet videos.
* Styling through CSS modules and Vanilla CSS.
* Typescript custom types to facilitate Twitter API responses handling and adapting.

## Description

This a Twitter Site clone created purely for educational purposes. It doesn't store any user data nor does it share it with any third party other than the Twitter Official API. The Twitter logo and other elements from the Twitter brand are property of Twitter, Inc.

## Getting Started

To get the app to work, you must first clone this repo and create a .env file with the following fields:

```
TWITTER_CLIENT_ID=
TWITTER_CLIENT_SECRET=
TWITTER_BEARER_TOKEN=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
```

You can obtain a Twitter bearer token creating a [Twitter Developer Account](https://developer.twitter.com). You need to have a Twitter account to this.
1. Visit the [Developer Portal](developer.twitter.com/apps) and follow the required prompts to create a developer project. 
2. It is important to define the User Authentication Settings. Type of App should be WebApp and the callback url should be: http://localhost:3000/api/auth/callback/twitter.
3. Requesting the API key and secret via the keys and token tab Developer Portal causes Twitter to produce the following things:
* API key (this is your 'access key')
* API secret key (this is your 'access secret')
* Bearer token
You'll only need the bearer token for this app. It is possible that you need to request it separately.
4. You should also request the OAuth 2.0 Client ID and Client Secret in this section.

It is recommended to create a proper value for NEXTAUTH_SECRET using:

```
$ openssl rand -base64 32
```

After you have properly configured this .env file, you should install the dependencies with:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

You should now be able to access the app in http://localhost:3000.

[API routes] can be accessed on their respective endpoints. Endpoints without authorization requirements: [http://localhost:3000/api/trends/trending, http://localhost:3000/api/search/{query}]

## Preview

https://user-images.githubusercontent.com/56691619/217121603-4ba668b7-2cb6-437f-8dfd-2d846b218c23.mp4
