import { Module } from '@nestjs/common';
import { OrderController } from './order.controller'; 
import { ProxyModule } from 'common/proxy/proxy.module';

@Module({
  imports:[ProxyModule],
  controllers: [OrderController]
})
export class OrderModule {}
