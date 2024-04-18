import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RoleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRoleDto: CreateRoleDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<{
        succes: boolean;
        message: string;
    }>;
    remove(id: string): Promise<{
        succes: boolean;
        message: string;
    }>;
}
