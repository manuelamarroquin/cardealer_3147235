import { PrismaService } from 'src/prisma/prisma.service';
import { Administrator } from './entities/administrator.entity';
import { Injectable } from '@nestjs/common';

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

    findOne(id:number){

    }

    //Añadir al arreglo de administrator, el administrador que esta llegando por el body

    create (body){

    }

    //Eliminar un elemento del arreglo por id
    remove(id:number){

    }
}

