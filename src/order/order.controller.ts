import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ClientProxyEcommerce } from 'common/proxy/client-proxy';
import { OrderMSG, ProductosMSG } from 'common/proxy/constants';
import { Observable } from 'rxjs';
import { OrderDTO } from './dto/order.dto';
import { IOrder } from 'common/interfaces/order.interface';
import { stringify } from 'querystring';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
@ApiTags('order')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/order')
export class OrderController {
    constructor(private readonly clientProxy:ClientProxyEcommerce){}
    private _clientProxyOrder= this.clientProxy.clientProxyOrders();
    private _clientProxyProducts = this.clientProxy.clientProxyProduct();

    
    @Post()
    create(@Body() orderDTO:OrderDTO): Observable<IOrder>{
        return this._clientProxyOrder.send(OrderMSG.CREATE, orderDTO);

    }
    @Get()
    findAll(): Observable<IOrder[]>{
        return this._clientProxyOrder.send(OrderMSG.FIND_ALL,'');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IOrder>{
        return this._clientProxyOrder.send(OrderMSG.FIND_ONE,id);
    }

    @Put(':id')
    update(@Param('id')id:string, @Body() orderDTO:OrderDTO): Observable<IOrder>{
        return this._clientProxyOrder.send(OrderMSG.UPDATE,{id,orderDTO});
    }

    @Delete(':id')
    delete(@Param('id') id:string): Observable<any>{
        return this._clientProxyOrder.send(OrderMSG.DELETE,id);

    }

    @Post(':orderId/producto/:productoId')
    async addProducto(
        @Param('orderId') orderId :string,
        @Param('productoId') productoId :string,
        ){
            const producto = await this._clientProxyProducts
            .send(ProductosMSG.FIND_ONE, productoId)
            .toPromise();
            if(!producto)
            throw new HttpException('NO HAY PRODUCTOS', HttpStatus.NOT_FOUND)
            return this._clientProxyOrder.send(OrderMSG.ADD_Product,{
                orderId,
                productoId
            
})
        }
        
    }