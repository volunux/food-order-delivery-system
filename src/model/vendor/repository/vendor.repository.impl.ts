import { Injectable } from '@nestjs/common';
import { VendorRepository } from './vendor.repository';
import { Vendor } from '../entities/vendor.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class VendorRepositoryImpl extends AbstractBaseRepositoryImpl<Vendor> implements VendorRepository {
  protected VxEntity: Newable<Vendor> = Vendor;
}
