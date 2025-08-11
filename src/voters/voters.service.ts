import { voters } from './entities/voters.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VotersService {
    private voters: voters[] = [
            {
                id:1,
                name:"Juan",
                typeDoc: "CC",
                numberDoc: 1234567891,
                career: "Ingenieria en sistema"
            },
            {
                id:2,
                name: "Pablo",
                typeDoc: "CC",
                numberDoc: 1365432345,
                career: "ingenieria quimica"
            }
        ]
    
        //Metodos:
        //CRUD: Select * from votantes 
        //This: acccede algo private en la clase 
        findAll(){
            return this.voters
        }
        
    
    
        //Añadir al arreglo de votantes, el votante que esta llegando por el body
    
        create (body){
            this.voters.push(body)
            return body;
        }
}
