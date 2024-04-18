import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    myProfile(userId: any): Promise<{
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
    getAllUsers(): Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: Date;
        password: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(id: string, updateUserDto: UpdateUserDto): string;
}
