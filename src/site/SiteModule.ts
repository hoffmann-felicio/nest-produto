import {Module} from "@nestjs/common";
import {ProductService} from "./services/ProductService";
import {ProductController} from "./ProductController";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductEntity} from './models/Product.Entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [
      ProductController
  ],
  providers: [
      ProductService
  ],
})
export class SiteModule {}