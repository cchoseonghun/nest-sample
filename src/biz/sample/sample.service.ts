import { Sample } from '@/entities/sample.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SampleService {
  constructor(@InjectRepository(Sample) private readonly sampleRepository: Repository<Sample>) {}

  async test() {
    return await this.sampleRepository.find();
  }
}
