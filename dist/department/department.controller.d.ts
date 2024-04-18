import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    create(organizationId: string, createDepartmentDto: CreateDepartmentDto): Promise<{
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
