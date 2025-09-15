// src/votes/votes.module.ts
import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [VotesController],
    providers: [VotesService],
})
export class VotesModule { }