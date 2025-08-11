import { voters } from './entities/voters.entity';
import { VotersService } from './voters.service';
import { Controller, Get, Post, Patch, Delete, Body} from '@nestjs/common';
@Controller('voters')
export class VotersController{

    //inyeccion de dependencias:
    //Inyectar un componente para uso de otro sin tener que instanciarlo
    constructor(private readonly VotersService: VotersService ) {}
    
    @Post()
    create(@Body()body){
        return this.VotersService.create(body)
    }
    @Get()
    findAll() {
        return this.VotersService.findAll();
    }

}
