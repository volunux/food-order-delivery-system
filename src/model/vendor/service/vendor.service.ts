import { Injectable } from '@nestjs/common';
import { Vendor } from '../entities/vendor.entity';
import { CreateVendorDto } from '../dto/create-vendor.dto';
import { UpdateVendorDto } from '../dto/update-vendor.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface VendorService extends CrudXService<Vendor> {

}
