import { VotesModule } from './votes/votes.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { VotersModule } from './voters/voters.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { PrismaModule } from './prisma/prisma.module';
import { CandidatesModule } from './candidates/candidates.module';
import { ElectionsModule } from './elections/elections.module';
import { RolesModule } from './role/role.module';
import { CareersModule } from './careers/careers.module';

@Module({
  imports: [CustomersModule, VotersModule, AdministratorsModule, PrismaModule, CandidatesModule, VotesModule, ElectionsModule, RolesModule, CareersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
