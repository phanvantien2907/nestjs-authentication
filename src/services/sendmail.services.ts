import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SendMailService {
  constructor(private readonly mailerService: MailerService) { }

  async sendResetPasswordEmail(email: string, token: string) {
    const url = `${process.env.LOCAL_URL}/auth/reset-password/${token}`;
    await this.mailerService.sendMail({
      to: email,
      from: 'Authentication Service Backend',
      subject: 'Reset Password',
      template: 'reset-password',
      html: `<p>Xin chào <b>${email}</b> gần đây chúng tôi nhận được yêu cầu đặt lại mật khẩu, Click <a href="${url}">here</a> để đặt lại mật khẩu</p>`,
    });
  }
}
