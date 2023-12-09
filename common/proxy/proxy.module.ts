import { Module } from '@nestjs/common'
import { ClientProxyEcommerce } from './client-proxy';

@Module({

    providers: [ClientProxyEcommerce],
    exports: [ClientProxyEcommerce]




})
export class ProxyModule{}