import { RegistrationUserDto } from './dto/registration.dto';
import { AuthService } from './auth.service';
import { ActivationAccountDto } from './dto/activation.account.dto';
import { SigninAuthDto } from './dto/signin.user.dto';
import { Response } from 'express';
import { ForgotPassword } from './dto/forgot.password.dto';
import { ResetPassword } from './dto/reset.password.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registerUser(dto: RegistrationUserDto): Promise<any>;
    activateUser(dto: ActivationAccountDto, res: Response): Promise<void>;
    signIn(credentials: SigninAuthDto, res: Response): Promise<any>;
    forgotPassword(dto: ForgotPassword): Promise<{
        success: boolean;
        message: string;
        token: string;
    }>;
    resetPassword(dto: ResetPassword): Promise<{
        success: boolean;
        message: string;
    }>;
    logout(response: Response): void;
    getUser(user: any): Promise<{
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
    deleteUser(userId: string): Promise<void>;
}
