import { Module } from '@nestjs/common';

import { AdministratorsController } from './administrators.controller';
import { AdministratorsService } from './administrators.servicie';

@Module({
  controllers: [AdministratorsController],
  providers: [AdministratorsService]
})
export class AdministratorsModule {}
