import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { <%= classify(name) %> } from './entities/<%= lowercased(name) %>.entity';

@Injectable()
export class <%= classify(name) %>Service {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.<%= classify(name) %>CreateInput): Promise<<%= classify(name) %>> {
    return this.prisma.<%= lowercased(name) %>.create({
      data,
    });
  }

  async findMany(): Promise<<%= classify(name) %>[]> {
    return this.prisma.<%= lowercased(name) %>.findMany();
  }

  async findUnique(id: number): Promise<<%= classify(name) %> | null> {
    return this.prisma.<%= lowercased(name) %>.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.<%= classify(name) %>UpdateInput): Promise<<%= classify(name) %>> {
    return this.prisma.<%= lowercased(name) %>.update({
      data,
      where: { id },
    });
  }

  async delete(id: number): Promise<<%= classify(name) %>> {
    return this.prisma.<%= lowercased(name) %>.delete({
      where: { id },
    });
  }
}