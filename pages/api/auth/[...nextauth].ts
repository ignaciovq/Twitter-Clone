import NextAuth, { AuthOptions, DefaultUser } from 'next-auth'
import TwitterProvider, { TwitterProfile } from 'next-auth/providers/twitter'

export interface User extends DefaultUser {
  username?: string | null
}

export const authOptions: AuthOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: '2.0',
      profile (profile: TwitterProfile) {
        return {
          id: profile.data.id,
          username: profile.data.username,
          name: profile.data.name,
          image: profile.data.profile_image_url
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile }) => {
      user && (token.user = user)
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    session: async ({ session, token, user }) => {
      session.user = token.user as User
      return session
    }
  }
}
export default NextAuth(authOptions)
