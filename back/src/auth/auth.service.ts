import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "../entities/Users";
import {Repository} from "typeorm";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>
    ) {}

    async validateUser(email: string, password: string) {
        console.log("1.5. email, password = ", email, password);
        const user = await this.usersRepository.findOne({
            where: {email},
            select: ['id', 'email', 'name', 'password']
        });
        console.log("2. validate = ", email, password, user);
        if (!user) {
            return null;
        }
        console.log("2.5. compare = ", user.password, password);
        const result = await bcrypt.compare(password, user.password);
        console.log("3. result = ", result);
        if (result) {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        }
        return null;
    }
}
