require('dotenv').config()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { auth } = require('../database/queries/auth')
const { hash } = require('../helpers/index')
const db = require('../configs/db')

passport.use( new GoogleStrategy({
  clientID:     process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback: true,
},
  async ( req, accessToken, refreshToken, profile, done) => {
    const { email, name } = profile._json
    const hashed = await hash.encrypt(hash.create_token())
    const user = await auth.searchByEmail(db, { email, username: null })
    if (user)return done(null, profile)
    if (!user){
      await auth.registerSSO(db, { email, hashed, username: name, active: true })
      return done(null, profile)
    }
  }
))

// passport.serializeUser((user, done) => done(null, user))

// passport.deserializeUser((user, done) => done(null, user))