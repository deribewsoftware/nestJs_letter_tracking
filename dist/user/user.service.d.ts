import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
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
