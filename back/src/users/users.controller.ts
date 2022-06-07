import {Body, Controller, ForbiddenException, Get, NotFoundException, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {JoinRequestDto} from "./dto/join.request.dto";
import {LocalAuthGuard} from "../auth/local-auth.guard";
import {User} from "../common/decorator/user.decorator";
import {Users} from "../entities/Users";

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

    @Post('signup')
    async join(@Body() data: JoinRequestDto) {
        console.log("통과 하나?", data.email);
        const user = this.usersService.findByUserEmail(data.email);
        if (!user) {
            throw new NotFoundException();
        }
        const result = await this.usersService.signUp(
            data.name,
            data.email,
            data.password
        );
        if (result) {
            return 'success';
        } else {
            throw new ForbiddenException();
        }
    }
}
