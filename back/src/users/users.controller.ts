import {Body, Controller, ForbiddenException, NotFoundException, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {JoinRequestDto} from "./dto/join.request.dto";

@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('signup')
    async join(@Body() data: JoinRequestDto) {
        const user = this.usersService.findByEmail(data.email);
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
