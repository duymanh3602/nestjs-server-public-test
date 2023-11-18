import { Controller, Get, Post } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Post()
  create(): string {
    return 'Test POST method /test ^^ kk';
  }

  @Get()
  findAll(): string {
    return 'Test GET method /test ^^';
  }
}
