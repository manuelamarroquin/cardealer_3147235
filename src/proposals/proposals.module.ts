// src/proposals/proposals.module.ts
import { Module } from '@nestjs/common';
import { ProposalsService } from './proposals.service';
import { ProposalsController } from './proposals.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProposalsController],
  providers: [ProposalsService],
  exports: [ProposalsService]
})
export class ProposalsModule {}