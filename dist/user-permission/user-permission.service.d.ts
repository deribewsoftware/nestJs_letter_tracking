import { CreateUserPermissionDto } from './dto/create-user-permission.dto';
import { UpdateUserPermissionDto } from './dto/update-user-permission.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserPermissionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserPermissionDto: CreateUserPermissionDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        permissionId: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        permissionId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        permissionId: string;
    }>;
    update(id: string, updateUserPermissionDto: UpdateUserPermissionDto): Promise<{
        success: boolean;
        messages: string;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        messages: string;
    }>;
}
