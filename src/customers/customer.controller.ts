import { Controller, Get, Post, Patch, Delete} from '@nestjs/common';

@Controller('customers')
export class CustomerController {
    //endpoint: un punto de entrada que otro proyecto o software va a utilizar
    //va a recirbir request http de aque proyecto 
    //se programa con una funcion con una sintaxis del lenguaje de programacion  
    @Get()
    consultarCustomers(){
        return "Aqui se mostraran todos los customers"
    }

    @Post()
    crearCustomers(){
        return "Aqui se va a crear un customer"
    }  
    
    

}

