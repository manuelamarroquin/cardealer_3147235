import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CandidatesService {

  constructor(private repositorio: PrismaService) { }

  /**
   * Registrar un nuevo candidato en bd
   * @param createCandidateDto: Los datos esperados y la nueva categoria
   */
  async create(createCandidateDto: CreateCandidateDto): Promise<any> {
    return this.repositorio.candidates.create({
      data: {
        nombre_candidate: createCandidateDto.nombre_candidate,
        apellido_candidate: '', // valor temporal
        tipo_doc_candidate: '', // valor temporal
        num_doc_candidate: 0,   // valor temporal
        correo_candidate: '',   // valor temporal
        estado_candidate: 'activo',
        foto_candidate: 'default.jpg'
      }
    });
  }

  async findAll(): Promise<any> {
    return this.repositorio.candidates.findMany();
}

  async findOne(id: number) {
    return this.repositorio.candidates.findUnique({
      where: { id_candidate: id },
    });
  }

  update(id: number, updateCandidateDto: UpdateCandidateDto) {
    return `This action updates a #${id} candidate`;
  }

  async remove(id: number) : Promise<any> {
    await this.repositorio.candidates.delete({
      where: { id_candidate: id },
    });
    return {
      status: 'success',
      id_candidate: id
    }
  }

}
