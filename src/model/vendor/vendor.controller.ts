import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendorServiceImpl } from './service/vendor.service.impl';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Controller('vendor')
export class VendorController {
  constructor(private readonly sevrice: VendorServiceImpl) {

  }
}
