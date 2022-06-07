import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {Injectable, UnauthorizedException} from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'email', passwordField: 'password' });
    }

    async validate(email: string, password: string, done: CallableFunction) {
        console.log("1. validate = ", email, password);
        const user = await this.authService.validateUser( email, password );
        console.log("4. user = ", user);
        if (!user) {
            console.log("unauthorized")
            throw new UnauthorizedException();
        }
        return done(null, user);
    }
}