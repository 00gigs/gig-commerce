
import { mongoDB } from '@/lib/mongodb'
import User from '@/models/user'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcryptjs from 'bcryptjs'


const authOptions = {
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{},

            async authorize(credentials){
                const {username,password} = credentials
              
                try {
                    await mongoDB()
                         const user = await User.findOne({username})

                         if(!user){
                            return null
                         }

                        const match =  await bcryptjs.compare(password, user.password)

                         if(!match){
                            return null
                         }
                         
                         return user
                } catch (error) {
                    console.log(error)
                }

            },
        })
    ],
    session:{
        strategy: 'jwt',
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:'https://www.hanzhomesolutions.com/',
    },
}

const handler = NextAuth(authOptions)

export{ handler as GET , handler as POST}