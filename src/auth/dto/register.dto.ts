import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDTO {
    @IsString({message: 'Tên đăng nhập không được để trống'})
    @MinLength(3, {message: 'Tên đăng nhập phải có ít nhất 3 ký tự'})
    @ApiProperty({description: 'Tên đăng nhập của người dùng', example: 'phanvantien'})
    username: string;

    @IsString({message: 'Email không được để trống'})
    @ApiProperty({description: 'Email của người dùng', example: 'phanvantien@example.com'})
    @IsEmail({}, {message: 'Email không hợp lệ'})
    email: string;

    @IsString({message: 'Họ và tên không được để trống'})
    @MinLength(3, {message: 'Họ và tên phải có ít nhất 3 ký tự'})
    @ApiProperty({description: 'Họ và tên của người dùng', example: 'Phan Van Tien'})
    fullname: string;

    @IsString({message: 'Mật khẩu không được để trống'})
    @MinLength(6, {message: 'Mật khẩu phải có ít nhất 6 ký tự'})
    @ApiProperty({description: 'Mật khẩu của người dùng', example: 'password123'})
    password: string;
}