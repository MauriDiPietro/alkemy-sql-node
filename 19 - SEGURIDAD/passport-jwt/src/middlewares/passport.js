import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import config from "../config/index.js";

const verifyToken = async (jwt_payload, done) => {
  //req.user = payload
  if (!jwt_payload)
    return done(null, false, { messages: "Usuario inexistente" });
  return done(null, jwt_payload);
};

const cookieExtractor = (req) => {
  return req.cookies.token;
};

const strategyCookiesConfig = {
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  secretOrKey: config.SECRET_KEY_JWT,
};

passport.use("jwt", new Strategy(strategyCookiesConfig, verifyToken));
