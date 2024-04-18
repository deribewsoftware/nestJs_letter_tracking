import { UserPermissionService } from './user-permission.service';
import { CreateUserPermissionDto } from './dto/create-user-permission.dto';
import { UpdateUserPermissionDto } from './dto/update-user-permission.dto';
export declare class UserPermissionController {
    private readonly userPermissionService;
    constructor(userPermissionService: UserPermissionService);
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
