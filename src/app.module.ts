/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { MailerModule } from './mailer/mailer.module';
import { DocumentModule } from './document/document.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { DepartmentModule } from './department/department.module';
import { UserRoleModule } from './user-role/user-role.module';
import { UserPermissionModule } from './user-permission/user-permission.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [PrismaModule,ConfigModule.forRoot({isGlobal:true}), AuthModule, MailerModule, DocumentModule, UserModule, RoleModule, PermissionModule, DepartmentModule, UserRoleModule, UserPermissionModule, OrganizationModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
