// src/proposals/proposals.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';

@Injectable()
export class ProposalsService {
  constructor(private prisma: PrismaService) {}

  async create(createProposalDto: CreateProposalDto) {
    // Verificar que el candidato existe
    const candidate = await this.prisma.candidate.findUnique({
      where: { id_candidate: createProposalDto.candidateId }
    });

    if (!candidate) {
      throw new NotFoundException('Candidato no encontrado');
    }

    return this.prisma.proposal.create({
      data: createProposalDto,
      include: {
        candidate: true
      }
    });
  }

  async findAll() {
    return this.prisma.proposal.findMany({
      include: {
        candidate: true
      }
    });
  }

  async findOne(id: number) {
    const proposal = await this.prisma.proposal.findUnique({
      where: { id_proposal: id },
      include: {
        candidate: true
      }
    });

    if (!proposal) {
      throw new NotFoundException(`Propuesta con ID ${id} no encontrada`);
    }

    return proposal;
  }

  async update(id: number, updateProposalDto: UpdateProposalDto) {
    try {
      return await this.prisma.proposal.update({
        where: { id_proposal: id },
        data: updateProposalDto,
        include: {
          candidate: true
        }
      });
    } catch (error) {
      throw new NotFoundException(`Propuesta con ID ${id} no encontrada`);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.proposal.delete({
        where: { id_proposal: id }
      });
      
      return {
        success: true,
        message: `Propuesta con ID ${id} eliminada correctamente`
      };
    } catch (error) {
      throw new NotFoundException(`Propuesta con ID ${id} no encontrada`);
    }
  }
}