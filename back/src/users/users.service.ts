import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "../entities/Users";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>
    ) { }

    async findByEmail(email: string) {
        return this.usersRepository.findOne({
            where: { email },
            select: ["id", "name", "email", "password" ],
        });
    }

    async signUp(name: string, email: string, password: string) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await this.usersRepository.findOne({ where: { email } });
        if (user) {
            throw new Error('이미 존재하는 사용자 입니다.');
        }
        const returned = await this.usersRepository.save({
            id: uuid(),
            email,
            name,
            password: hashedPassword,
        });
        console.log("successed = ", returned);
        return true;
    }
}
