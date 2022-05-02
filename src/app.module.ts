import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './model/menu/menu.module';
import { MenuCategoryModule } from './model/menu-category/menu-category.module';
import { CustomerModule } from './model/customer/customer.module';
import { OrderModule } from './model/order/order.module';
import { OrderDetailModule } from './model/order-detail/order-detail.module';
import { PaymentModule } from './model/payment/payment.module';
import { MenuRatingModule } from './model/menu-rating/menu-rating.module';
import { EmployeeModule } from './model/employee/employee.module';
import { OrderStatusModule } from './model/order-status/order-status.module';
import { UserStatusModule } from './model/user-status/user-status.module';
import { VendorModule } from './model/vendor/vendor.module';
import { MenuStatusModule } from './model/menu-status/menu-status.module';
import { RoleModule } from './model/role/role.module';
import { SeedingsModule } from './seedings/seedings.module';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';
import ConfigurationProperties from './config/configuration-properties';

@Global()
@Module({
  imports: [TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
      imports: [DatabaseModule],
      inject: [DatabaseService,ConfigurationProperties]
  }), DatabaseModule, MenuModule, MenuCategoryModule, CustomerModule, OrderModule, OrderDetailModule, PaymentModule, MenuRatingModule, EmployeeModule, 
  OrderStatusModule, UserStatusModule, VendorModule, MenuStatusModule, RoleModule, SeedingsModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
