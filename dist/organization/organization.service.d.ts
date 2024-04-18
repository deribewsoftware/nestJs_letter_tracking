import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class OrganizationService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateOrganizationDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        logo: string;
        description: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        logo: string;
        description: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        logo: string;
        description: string;
    }>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<{
        success: boolean;
        message: string;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
