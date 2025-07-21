import { Controller, Get, Post, Body, Param, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import { LoginrDTO } from 'src/auth/dto/login.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RefreshTokenDTO } from 'src/auth/dto/refresh-token.dto';
import { GuardsGuard } from 'src/guards/guards.guard';
import { ResetPasswordDTO } from 'src/auth/dto/resert-password.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Tạo tài khoản mới' })
  register(@Body() registerData: RegisterDTO) {
    return this.authService.register(registerData);
  }

  @Post('login')
  @ApiOperation({ summary: 'Đăng nhập vào hệ thống' })
  login(@Body() loginData: LoginrDTO) {
    return this.authService.login(loginData);
  }

   @Post('refresh-token')
  @ApiOperation({ summary: 'Làm mới token' })
  refreshtoken(@Body() rftokenDTO: RefreshTokenDTO) {
    return this.authService.refreshtoken(rftokenDTO.token);
  }

  @Post('logout')
  @ApiOperation({ summary: 'Đăng xuất khỏi hệ thống' })
  @UseGuards(GuardsGuard)
  logout(@Req() req: Request) {
  const user = req['user'];
  return this.authService.logout(user.userId);
  }

  @Post('change-password')
   @UseGuards(GuardsGuard)
  @ApiOperation({ summary: 'Thay đổi mật khẩu' })
  changePassword(@Param('id') id: string, @Body() changeData: { oldPassword: string, newPassword: string }, @Req() req: Request) {
    const user = req['user'];
    return this.authService.changePassword(user.userId, changeData.oldPassword, changeData.newPassword);
  }

  @Post('forget-password')
  @ApiOperation({ summary: 'Quên mật khẩu' })
  forgetPassword(@Body() body: { email: string }) {
    return this.authService.forgetPassword(body.email);
  }

   @Post('reset-password/:token')
   @ApiOperation({ summary: 'Đặt lại mật khẩu' })
    resetPassword(@Param('token') token: string, @Body() resetPasswordDTO: ResetPasswordDTO) {
      return this.authService.resetPassword(resetPasswordDTO.newPassword, token);
    }

  }
