/* eslint-disable prettier/prettier */
import { PrismaService } from "./prisma/prisma.service";
import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/repositories/notifications-Repository";
import {PrismaNotificationsRepository} from "./prisma/repositories/prisma-notifications-repositories"


@Module({
    providers: [PrismaService,{
    provide:NotificationsRepository,
    useClass:PrismaNotificationsRepository
    }],
    exports:[NotificationsRepository]
    
})
export class DatabaseModule {}
