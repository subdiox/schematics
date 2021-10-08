import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { <%= classify(name) %>, Prisma } from '.prisma/client';

@Injectable()
export class <%= classify(name) %>Service {
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
