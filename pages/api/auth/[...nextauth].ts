import NextAuth, { Awaitable, DefaultUser } from 'next-auth'
import TwitterProvider, { TwitterProfile } from 'next-auth/providers/twitter'

export interface User extends DefaultUser {
  username?: string | null
}
export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: '2.0',
      profile (profile: TwitterProfile): Awaitable<User> {
        return {
          id: profile.data.id,
          name: profile.data.name,
          username: profile.data.username,
          image: profile.data.profile_image_url
        }
      }/*,
      callbacks: {
        jwt: async ({ token, user, account, profile }) => {
          console.debug('jwt', { token, user, account, profile })
          user && (token.user = user)
          return token
        },
        session: async ({ session, token, user }) => {
          console.debug('session', { session, token, user })
          session.user = token.user
          return session
        }
      } */
    })
  ]
}
export default NextAuth(authOptions)
