import { Body, HttpStatus, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from 'src/auth/entities/auth.schema';
import { Model } from 'mongoose';
import { LoginrDTO } from 'src/auth/dto/login.dto';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private authModel: Model<Auth>) {}

 async register(@Body() registerData: RegisterDTO) {
   const exiting_users = await this.authModel.findOne({ username: registerData.username});
   if(exiting_users) { throw new NotFoundException('Người dùng đã tồn tại'); }
   const hashedPassword = await bcrypt.hash(registerData.password, 10);
   await this.authModel.create({username: registerData.username, fullname: registerData.fullname, password: hashedPassword});
   return {msg: 'Đăng ký thành công', status: HttpStatus.CREATED};
  }

  async login(@Body() loginData: LoginrDTO) {
    return 'This action logs in a user';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
