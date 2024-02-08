import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SampleService } from './sample.service';

@ApiTags('sample')
@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get('test/1')
  async test() {
    return await this.sampleService.test();
  }

}
