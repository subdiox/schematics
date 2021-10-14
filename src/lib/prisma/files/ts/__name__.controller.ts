import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { <%= classify(name) %>Service } from './<%= lowercased(name) %>.service';
import { <%= classify(name) %> } from './entities/<%= lowercased(name) %>.entity';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= lowercased(name) %>.dto';
import { Update<%= classify(name) %>Dto } from './dto/update-<%= lowercased(name) %>.dto';

@Controller('<%= lowercased(name) %>')
export class <%= classify(name) %>Controller {
  constructor(private readonly <%= lowercased(name) %>Service: <%= classify(name) %>Service) {}

  @Post()
  async create(@Body() data: Create<%= classify(name) %>Dto): Promise<<%= classify(name) %>> {
    return this.<%= lowercased(name) %>Service.create({
      ...data
    });
  }

  @Get()
  async findMany(): Promise<<%= classify(name) %>[]> {
    return this.<%= lowercased(name) %>Service.findMany();
  }

  @Get(':id')
  async findUnique(@Param('id') id: string): Promise<<%= classify(name) %> | null> {
    return this.<%= lowercased(name) %>Service.findUnique(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Update<%= classify(name) %>Dto,
  ) {
    return this.<%= lowercased(name) %>Service.update(+id, {
      ...data
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.<%= lowercased(name) %>Service.delete(+id);
  }
}