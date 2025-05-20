import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Пинг')
@Controller()
export class AppController {
  @ApiOperation({
    summary: 'Пинг',
    description: 'Тестирование доступности сервиса',
  })
  @Get('ping')
  ping(): string {
    return 'pong';
  }
}
