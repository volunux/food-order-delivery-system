import { Injectable } from '@nestjs/common';
import { Vendor } from '../entities/vendor.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface VendorRepository extends CrudXRepository<Vendor> {

}
