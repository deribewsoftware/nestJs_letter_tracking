import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
export declare class DocumentController {
    private readonly documentService;
    constructor(documentService: DocumentService);
    create(createDocumentDto: CreateDocumentDto, user: any): Promise<{
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
