import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('candidates')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSaludo(): string {
    const nombre: string = "Manuela Marroquin";
    return `Este es el Response para: ${nombre}`
  }
}
