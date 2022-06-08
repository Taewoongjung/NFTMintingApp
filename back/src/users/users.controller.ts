import {Body, Controller, ForbiddenException, Get, NotFoundException, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {JoinRequestDto} from "./dto/join.request.dto";
import {LocalAuthGuard} from "../auth/local-auth.guard";
import {User} from "../common/decorator/user.decorator";
import {Users} from "../entities/Users";
import {LoggedInGuard} from "../auth/logged-in.guard";
import { NotLoggedInGuard } from 'src/auth/not-logged-in.guard';

@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async getUsers(@User() user: Users) { // login 되어있는 사용자의 정보를 가져온다
        console.log("get 요청 user = ", user);
        return user || false; // req.user
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@User() user: Users) {
        console.log("3. user = ", user);
        return user;
    }

    @UseGuards(new NotLoggedInGuard())
    @Post('signup')
    async join(@Body() data: JoinRequestDto) {
        const result = await this.usersService.signUp(data.email, data.name, data.password);
            return 'success';
    }
}
