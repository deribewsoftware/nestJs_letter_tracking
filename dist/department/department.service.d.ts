import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DepartmentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDepartmentDto: CreateDepartmentDto, organizationId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
        organizationId: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
        organizationId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
        organizationId: string;
    }>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<{
        success: boolean;
        message: string;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
