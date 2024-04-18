import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PermissionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPermissionDto: CreatePermissionDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        action: string;
        roleId: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        action: string;
        roleId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        action: string;
        roleId: string;
    }>;
    update(id: string, updatePermissionDto: UpdatePermissionDto): Promise<{
        success: boolean;
        message: string;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
