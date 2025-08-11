import { Administrator } from './entities/administrator.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdministratorsService {
    //Private: Solo se puede utilizar al interior de la clase con this
    private administrators: Administrator[] = [
        {
            id:1,
            name:"Camilo",
            description: "Docente de la universidad"

        },
        {
            id:2,
            name: "Julian",
            description: "Docente de la universidad"
        }
    ]

    //Metodos:
    //CRUD: Select * from administrators 
    //This: acccede algo private en la clase 
    findAll(){
        return this.administrators
    }
    
    //Buscar el administrators por id:

    findOne(id:number){

        //Buscando el administrators por id
        let admin = this.administrators.find(function(Administrator){
            //si lo encuentro lo retorno
            return Administrator.id === id
        })
        return admin;
    }

    //Añadir al arreglo de administrator, el administrador que esta llegando por el body

    create (body){
        this.administrators.push(body)
        return body;
    }

    //Eliminar un elemento del arreglo por id
    remove(id:number) : string{
        //Filter: es para retornar un nuevo arreglo con elementos que cumplan la condicional
        this.administrators = this.administrators.filter(
            function(administrator){
                return administrator.id !== id
            }
        )
        return "Elemento eliminado"
    }
}

