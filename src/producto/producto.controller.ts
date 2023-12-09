import { Body, Controller, Post, Get,Param,Put,Delete, UseGuards } from '@nestjs/common';
import { IProducto } from 'common/interfaces/producto.interface';
import { ClientProxyEcommerce } from 'common/proxy/client-proxy';
import { ProductosMSG } from 'common/proxy/constants';
import { Observable } from 'rxjs';
import { ProductoDTO } from './dto/producto.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
@ApiTags('product')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/producto')
export class ProductoController {
    constructor(private readonly clientProxy: ClientProxyEcommerce){}
    private _clientProxyProducto = this.clientProxy.clientProxyProduct();


    @Post()
    create(@Body() productoDTO: ProductoDTO): Observable<IProducto>{
        return this._clientProxyProducto.send(ProductosMSG.CREATE, productoDTO);

    }
    @Get()
    findAll(): Observable<IProducto[]>{
        return this._clientProxyProducto.send(ProductosMSG.FIND_ALL,'');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IProducto>{
        return this._clientProxyProducto.send(ProductosMSG.FIND_ONE,id);
    }

    @Put(':id')
    update(@Param('id')id:string, @Body() productoDTO:ProductoDTO): Observable<IProducto>{
        return this._clientProxyProducto.send(ProductosMSG.UPDATE,{id,productoDTO});
    }

    @Delete(':id')
    delete(@Param('id') id:string): Observable<any>{
        return this._clientProxyProducto.send(ProductosMSG.DELETE,id);
    }
    
}
