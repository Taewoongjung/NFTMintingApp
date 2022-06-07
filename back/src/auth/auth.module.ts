import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "../entities/Users";
import {LocalStrategy} from "./local.strategy";
import {LocalSerializer} from "./local.serializer";
import {PassportModule} from "@nestjs/passport";

@Module({
    imports: [
        PassportModule.register({ session: true }),
        TypeOrmModule.forFeature([Users]),
    ],
    providers: [AuthService, LocalStrategy, LocalSerializer],
})
export class AuthModule {}
