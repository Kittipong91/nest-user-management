import { Controller, Get, Version } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";


@Controller('health')
export class HealthController {
  @Version('1')
  @Get()
  @ApiOperation({ summary: 'Health check' })
  check() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(), 
    };
  }
}