import { Injectable, Inject } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { Vendor } from '../entities/vendor.entity';
import { VendorRepositoryImpl } from '../repository/vendor.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class VendorServiceImpl extends AbstractBaseServiceImpl<Vendor> implements VendorService {

  @Inject()
  protected repository: VendorRepositoryImpl;
}
