import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { <%= classify(name) %>Service } from './<%= name %>.service';
import { <%= classify(name) %>, Prisma } from '.prisma/client';

@Controller('<%= dasherize(name) %>')
export class <%= classify(name) %>Controller {
  constructor(private readonly <%= lowercased(name) %>Service: <%= classify(name) %>Service) {}

  @Post()
  async create(@Body() data: Prisma.<%= singular(classify(name)) %>CreateInput): Promise<<%= singular(classify(name)) %>> {
    return this.<%= lowercased(name) %>Service.create(data);
  }

  @Get()
  async findMany(): Promise<<%= singular(classify(name)) %>[]> {
    return this.<%= lowercased(name) %>Service.findMany();
  }

  @Get(':id')
  async findUnique(@Param('id') id: string): Promise<<%= singular(classify(name)) %> | null> {
    return this.<%= lowercased(name) %>Service.findUnique(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: Prisma.<%= singular(classify(name)) %>UpdateInput) {
    return this.<%= lowercased(name) %>Service.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.<%= lowercased(name) %>Service.delete(+id);
  }
}
