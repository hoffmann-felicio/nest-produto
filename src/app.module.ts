import { Module } from '@nestjs/common';
import {SiteModule} from "./site/SiteModule";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      SiteModule,
      TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: ["dist/**/*.Entity{.ts,.js}"],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
