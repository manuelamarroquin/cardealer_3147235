import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { VotersModule } from './voters/voters.module';
import { AdministratorsModule } from './administrators/administrators.module';

@Module({
  imports: [CustomersModule, VotersModule, AdministratorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
