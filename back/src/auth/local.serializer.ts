import {Injectable} from "@nestjs/common";
import {PassportSerializer} from "@nestjs/passport";
import {AuthService} from "./auth.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "../entities/Users";
import {Repository} from "typeorm";

@Injectable()
export class LocalSerializer extends PassportSerializer {
    constructor(
        private readonly authService: AuthService,
        @InjectRepository(Users) private usersRepository: Repository<Users>
    ) {
        super();
    }

    serializeUser(user: Users, done: Function): any {
        console.log("serialized = ", user);
        done(null, user.id);
    }

    async deserializeUser(userId: string, done: CallableFunction) {
        return await this.usersRepository
            .findOne(
                {
                    id: userId,
                },
                {
                    select: ['id', 'email', 'name']
                }
            )
            .then((user) => {
                console.log('user', user);
                done(null, user);
            })
            .catch((error) => done(error));
    }
}
