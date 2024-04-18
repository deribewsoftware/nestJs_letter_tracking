import { PrismaService } from 'src/prisma/prisma.service';
import { RegistrationUserDto } from './dto/registration.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from "nodemailer";
import { ActivationAccountDto } from './dto/activation.account.dto';
import { Tokens } from './types/token.types';
import { SigninAuthDto } from './dto/signin.user.dto';
import { ResetPassword } from './dto/reset.password.dto';
import { ForgotPassword } from './dto/forgot.password.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    private configService;
    constructor(prisma: PrismaService, jwt: JwtService, configService: ConfigService);
    mailTransport(): nodemailer.Transporter<unknown>;
    createActivationToken(email: string): Promise<{
        token: string;
        activationCode: string;
    }>;
    createUser(dto: RegistrationUserDto): Promise<any>;
    activationAccount(dto: ActivationAccountDto): Promise<Tokens>;
    signin(dto: SigninAuthDto, res: any): Promise<any>;
    logout(response: any): void;
    myProfile(userId: string): Promise<{
        roles: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            roleId: string;
        }[];
        permissions: {
            role: {
                action: string;
            };
        }[];
    } & {
        id: string;
        name: string;
        email: string;
        emailVerified: Date;
        password: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    forgotPassword(dto: ForgotPassword): Promise<{
        success: boolean;
        message: string;
        token: string;
    }>;
    resetPassword(dto: ResetPassword): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteAccount(userId: string): Promise<void>;
    GetToken(userId: string, email: string, roles: any[], permissions: any[]): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
