import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
export declare class OrganizationController {
    private readonly organizationService;
    constructor(organizationService: OrganizationService);
    create(createOrganizationDto: CreateOrganizationDto): Promise<{
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
