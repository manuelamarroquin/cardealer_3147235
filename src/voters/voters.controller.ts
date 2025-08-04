import { Controller, Get, Post, Patch, Delete} from '@nestjs/common';

@Controller('voters')
export class VotersController {
    @Get()
    consultarVoters(){
        return "Aqui estaran todos los voters"
    }

    @Post()
    crearVoters(){
        return "Aqui se va a crear un voter"
    }
}
