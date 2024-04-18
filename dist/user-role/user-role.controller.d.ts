import { UserRoleService } from './user-role.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
export declare class UserRoleController {
    private readonly userRoleService;
    constructor(userRoleService: UserRoleService);
    create(createUserRoleDto: CreateUserRoleDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        roleId: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        roleId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        roleId: string;
    }>;
    update(id: string, updateUserRoleDto: UpdateUserRoleDto): Promise<{
        success: boolean;
        messages: string;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        messages: string;
    }>;
}
