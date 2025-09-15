import { PrismaService } from 'src/prisma/prisma.service';
import { Administrator } from './entities/administrator.entity';
import { Injectable } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';

@Injectable()
export class AdministratorsService {

    constructor(
        private prisma: PrismaService
    ){}
    //Private: Solo se puede utilizar al interior de la clase con this


    //Metodos:
    //CRUD: Select * from administrators 
    //This: acccede algo private en la clase 
    findAll(){
        return this.prisma.administrador.findMany()
    }
    
    //Buscar el administrators por id:

    async findOne(id:number){
        return await this.prisma.administrador.findFirst({
            where: {id_admin:id}
        })
    }

    //Añadir al arreglo de administrator, el administrador que esta llegando por el body
    async create (newAdministrator: CreateAdministratorDto){
        return await this.prisma.administrador.create({
            data:{
                nombre_admin: newAdministrator.nombre_admin,
                apellido_admin: newAdministrator.apellido_admin,
                tipo_doc_admin: newAdministrator.tipo_doc_admin,
                num_doc_admin: newAdministrator.num_doc_admin,
                correo_admin: newAdministrator.correo_admin,
                contrasena_admin: newAdministrator.contrasena_admin
            }
        })
    }

    //Eliminar un elemento del arreglo por id
    remove(id:number){

    }
}

