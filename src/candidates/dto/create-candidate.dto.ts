//Dto. Data Transfer Object
//Sirve para definir la estructura de los datos que se esperan en las solicitudes HTTP
//y para validar esos datos antes de que lleguen a los controladores.
export class CreateCandidateDto {
    nombre_candidate: string;
}
