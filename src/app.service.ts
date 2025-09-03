import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Accessed getHello at', new Date().toISOString());
    return 'Labit UMM 2025 - Aslab 25';
  }
}
