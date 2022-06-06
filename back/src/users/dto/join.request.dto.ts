import {IsNotEmpty, IsString} from "class-validator";

export class JoinRequestDto {
    @IsString()
    @IsNotEmpty()
    public email: string;

    @IsString()
    @IsNotEmpty()
    public name: string;

    @IsString()
    @IsNotEmpty()
    public password: string;
}