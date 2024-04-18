import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DocumentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDocumentDto: CreateDocumentDto, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        creatorId: string;
        departmentId: string;
        title: string;
        description: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        creatorId: string;
        departmentId: string;
        title: string;
        description: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        creatorId: string;
        departmentId: string;
        title: string;
        description: string;
    }>;
    update(id: string, updateDocumentDto: UpdateDocumentDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
