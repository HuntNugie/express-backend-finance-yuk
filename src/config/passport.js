import passport from "passport";
import {Strategy} from "passport-google-oauth20";
import User from "../models/User.js";
import crypto from "crypto";
import {config} from "dotenv";
config();

passport.use(
    new Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/auth/google/callback",
        },
        async (accesToken, refreshToken, profile, done) => {
            try {
                const email = profile.emails[0].value;
                let user = await User.findUnique({where: {email}, include: {profile: true}});
                if (!user) {
                    const random = crypto.randomBytes(32).toString("hex");
                    user = await User.create({
                        data: {
                            email,
                            password: random,
                            googleId: profile.id,

                            profile: {
                                create: {
                                    nama: profile.displayName,
                                },
                            },
                        },
                        include: {
                            profile: true,
                        },
                    });
                } else if (!user.googleId) {
                    user = await User.update({
                        where: {email},
                        data: {
                            googleId: profile.id,
                        },
                        include: {profile: true},
                    });
                }
                const result = {
                    user_id: user.id,
                    email,
                    profile: user.profile,
                };
                return done(null, result);
            } catch (err) {
                return done(err, null);
            }
        }
    )
);
