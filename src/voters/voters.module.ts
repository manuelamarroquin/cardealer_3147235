// src/voters/voters.module.ts
import { Module } from '@nestjs/common';
import { VotersService } from './voters.service';
import { VotersController } from './voters.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VotersController],
  providers: [VotersService],
  exports: [VotersService]
})
export class VotersModule {}