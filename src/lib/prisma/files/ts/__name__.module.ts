import { Module } from '@nestjs/common';
import { <%= classify(name) %>Service } from './<%= name %>.service';
import { <%= classify(name) %>Controller } from './<%= name %>.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [<%= classify(name) %>Controller],
  providers: [<%= classify(name) %>Service, PrismaService]
})
export class <%= classify(name) %>Module {}
