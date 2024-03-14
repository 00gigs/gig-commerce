import { sign } from 'crypto'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions = {
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{},

            async authorize(credentials){
                const user = {id: '1'}
                return user
            },
        })
    ],
    session:{
        strategy: 'jwt',
    },
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    pages:{
        signIn:'/',
    },
}

const handler = NextAuth(authOptions)

export{ handler as GET , handler as POST}