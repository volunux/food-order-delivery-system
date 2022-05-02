import { Module } from '@nestjs/common';
import { VendorServiceImpl } from './service/vendor.service.impl';
import { VendorRepositoryImpl } from './repository/vendor.repository.impl';
import { VendorController } from './vendor.controller';

@Module({
  controllers: [VendorController],
  providers: [VendorServiceImpl, VendorRepositoryImpl]
})
export class VendorModule {}
