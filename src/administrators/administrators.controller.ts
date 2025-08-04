import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';


@Controller('administrators')
export class AdministratorsController {

  @Post()
  create() {
    return "Aqui se van a crear los administrators";
  }

  @Get()
  findAll() {
    return "Aqui se van a consultar todos los adminitrators";
  }

  //Consultar un resource por id un
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aqui se consulta el administrator cuyo id es: ${id}`
  }


  @Patch(':id')
  update(@Param('id') id: string) {
    return "Aqui se actualizará el administrator con id: " + id
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Aqui se borrará el administrator con id:" + id
  }
}
