// candidates.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CandidatesService {

  constructor(private repositorio: PrismaService) { }

  async create(createCandidateDto: CreateCandidateDto): Promise<any> {
    return this.repositorio.candidate.create({
      data: {
        nombre_candidate: createCandidateDto.nombre_candidate,
        apellido_candidate: createCandidateDto.apellido_candidate || '',
        tipo_doc_candidate: createCandidateDto.tipo_doc_candidate || '',
        num_doc_candidate: createCandidateDto.num_doc_candidate || 0,
        correo_candidate: createCandidateDto.correo_candidate || '',
        estado_candidate: createCandidateDto.estado_candidate || 'activo',
        foto_candidate: createCandidateDto.foto_candidate || 'default.jpg',
        electionId: createCandidateDto.electionId // ← OBLIGATORIO
      }
    });
  }

  async findAll(): Promise<any> {
    return this.repositorio.candidate.findMany({
      include: {
        election: true // Incluir datos de la elección
      }
    });
  }

  async findOne(id: number) {
    return this.repositorio.candidate.findUnique({
      where: { id_candidate: id },
      include: {
        election: true
      }
    });
  }

  update(id: number, updateCandidateDto: UpdateCandidateDto) {
    return `This action updates a #${id} candidate`;
  }

  async remove(id: number): Promise<any> {
    await this.repositorio.candidate.delete({
      where: { id_candidate: id },
    });
    return {
      status: 'success',
      id_candidate: id
    }
  }
}