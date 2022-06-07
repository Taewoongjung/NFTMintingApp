import {BadRequestException, HttpException, HttpStatus, Injectable} from '@nestjs/common';
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
        const user = await this.usersRepository.findOne({ where: { email } });
        if (user) {
            return user;
        }
        throw new HttpException(
            '사용자 이메일이 존재하지 않습니다.',
            HttpStatus.NOT_FOUND,
        )
    }

    async findByUserEmail(email: string) {
        return this.usersRepository.findOne({
            where: { email },
            select: ["id", "email", "password"]
        });
    }

    async signUp(name: string, email: string, password: string) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log("email=", email);
        const user = await this.usersRepository.findOne({ where: { email } });
        if (user) {
            console.log("user = ", user);
            throw new BadRequestException('이미 존재하는 사용자 입니다.');
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
