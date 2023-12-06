import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProductsController, PrismaService],
  providers: [ProductsService],
})
export class ProductsModule {}
