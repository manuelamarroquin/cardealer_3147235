
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministratorsService } from './administrators.servicie';
import { CreateAdministratorDto } from './dto/create-administrator.dto';


@Controller('administrators')
export class AdministratorsController {

  //inyeccion de dependencias:
  //Inyectar un componente para uso de otro sin tener que instanciarlo
  constructor(private readonly administratorsService: AdministratorsService ) {}

  //Crear un Administrador
  @Post()
  create(@Body() newAdministrator: CreateAdministratorDto) {
    return this.administratorsService.create(newAdministrator);
  }

  @Get()
  findAll() {
    return this.administratorsService.findAll();
  }

  //Consultar un resource por id un
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.administratorsService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string) {
    return "Aqui se actualizará el administrator con id: " + id
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      "success" : true,
      "mensaje" : this.administratorsService.remove(+id)
    }
  }
}
