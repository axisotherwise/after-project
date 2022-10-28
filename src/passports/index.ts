import passport from "passport";

import LocalStrategy from "./local.strategy";

export default () => {
    passport.use("local", LocalStrategy);
}